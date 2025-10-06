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
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

// Create checkin
export async function createCheckin(
  userId: string,
  pageId: string,
  answer: string,
): Promise<RallyCheckin> {
  const checkin = await sql`
    INSERT INTO rally_checkins (user_id, page_id, answer) VALUES (${userId}, ${pageId}, ${answer}) RETURNING *
  `

  return checkin[0] as RallyCheckin
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
          'timestamp', c.timestamp
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
