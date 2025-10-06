import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export interface RallyUser {
  id: string
  name: string
  created_at: string
}

export interface RallyCheckin {
  id: string
  user_id: string
  page_id: string
  answer: string
  timestamp: string
  is_correct: boolean | null
  manually_verified: boolean
}

export interface RallyUserWithCheckins extends RallyUser {
  checkins: RallyCheckin[]
}

// Initialize database tables
export async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS rally_users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS rally_checkins (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES rally_users(id),
      page_id VARCHAR(255) NOT NULL,
      answer TEXT NOT NULL,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_correct BOOLEAN DEFAULT NULL,
      manually_verified BOOLEAN DEFAULT FALSE
    )
  `
}

// Create or get user
export async function createOrGetUser(name: string): Promise<RallyUser> {
  const existingUser = await sql`
    SELECT * FROM rally_users WHERE name = ${name}
  `

  if (existingUser.length > 0) {
    return existingUser[0] as RallyUser
  }

  const newUser = await sql`
    INSERT INTO rally_users (name) VALUES (${name}) RETURNING *
  `

  return newUser[0] as RallyUser
}

// Create checkin with automatic answer verification
export async function createCheckin(
  userId: string,
  pageId: string,
  answer: string,
  expectedAnswer?: string,
): Promise<RallyCheckin> {
  // Automatische Überprüfung der Antwort
  let isCorrect: boolean | null = null
  if (expectedAnswer) {
    const normalizedAnswer = answer.toLowerCase().trim()
    const normalizedExpected = expectedAnswer.toLowerCase().trim()
    isCorrect = normalizedAnswer === normalizedExpected
  }

  const checkin = await sql`
    INSERT INTO rally_checkins (user_id, page_id, answer, is_correct, manually_verified) 
    VALUES (${userId}, ${pageId}, ${answer}, ${isCorrect}, false) 
    RETURNING *
  `

  return checkin[0] as RallyCheckin
}

// Update checkin verification status
export async function updateCheckinVerification(
  checkinId: string,
  isCorrect: boolean,
): Promise<RallyCheckin> {
  const checkin = await sql`
    UPDATE rally_checkins 
    SET is_correct = ${isCorrect}, manually_verified = true 
    WHERE id = ${checkinId} 
    RETURNING *
  `

  return checkin[0] as RallyCheckin
}

// Merge users - combine all checkins from sourceUserId into targetUserId
// Richtige Antworten überschreiben falsche, keine Duplikate
export async function mergeUsers(sourceUserId: string, targetUserId: string): Promise<void> {
  // Hole alle Check-ins beider Benutzer
  const sourceCheckins = await sql`
    SELECT * FROM rally_checkins WHERE user_id = ${sourceUserId}
  `

  const targetCheckins = await sql`
    SELECT * FROM rally_checkins WHERE user_id = ${targetUserId}
  `

  // Für jeden Source-Check-in
  for (const sourceCheckin of sourceCheckins) {
    const existingTarget = (targetCheckins as RallyCheckin[]).find(
      (tc) => tc.page_id === sourceCheckin.page_id,
    )

    if (!existingTarget) {
      // Station existiert nicht beim Ziel-User, einfach übertragen
      await sql`
        UPDATE rally_checkins 
        SET user_id = ${targetUserId} 
        WHERE id = ${sourceCheckin.id}
      `
    } else {
      // Station existiert bei beiden
      // Wenn Source richtig ist und Target falsch, überschreibe
      if (sourceCheckin.is_correct === true && existingTarget.is_correct !== true) {
        await sql`
          DELETE FROM rally_checkins WHERE id = ${existingTarget.id}
        `
        await sql`
          UPDATE rally_checkins 
          SET user_id = ${targetUserId} 
          WHERE id = ${sourceCheckin.id}
        `
      } else {
        // Ansonsten lösche Source-Check-in (behalte Target)
        await sql`
          DELETE FROM rally_checkins WHERE id = ${sourceCheckin.id}
        `
      }
    }
  }

  // Lösche Source-User
  await sql`
    DELETE FROM rally_users WHERE id = ${sourceUserId}
  `
}

// Get all users with their checkins
export async function getAllUsersWithCheckins(): Promise<RallyUserWithCheckins[]> {
  const users = await sql`
    SELECT 
      u.id,
      u.name,
      u.created_at,
      json_agg(
        json_build_object(
          'id', c.id,
          'page_id', c.page_id,
          'answer', c.answer,
          'timestamp', c.timestamp,
          'is_correct', c.is_correct,
          'manually_verified', c.manually_verified
        )
      ) FILTER (WHERE c.id IS NOT NULL) as checkins
    FROM rally_users u
    LEFT JOIN rally_checkins c ON u.id = c.user_id
    GROUP BY u.id, u.name, u.created_at
    ORDER BY u.created_at DESC
  `

  return users as RallyUserWithCheckins[]
}

// Get user checkins
export async function getUserCheckins(userId: string): Promise<RallyCheckin[]> {
  const checkins = await sql`
    SELECT * FROM rally_checkins WHERE user_id = ${userId} ORDER BY timestamp DESC
  `

  return checkins as RallyCheckin[]
}
