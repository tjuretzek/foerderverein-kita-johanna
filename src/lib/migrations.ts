import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function resetDatabase() {
  // Lösche existierende Tabellen
  await sql`DROP TABLE IF EXISTS rally_checkins CASCADE`
  await sql`DROP TABLE IF EXISTS rally_users CASCADE`

  // Erstelle Tabellen neu mit korrektem Schema
  await sql`
    CREATE TABLE rally_users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await sql`
    CREATE TABLE rally_checkins (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES rally_users(id) ON DELETE CASCADE,
      page_id VARCHAR(255) NOT NULL,
      answer TEXT NOT NULL,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_correct BOOLEAN DEFAULT NULL,
      manually_verified BOOLEAN DEFAULT FALSE
    )
  `

  console.log('Database reset successfully')
}

export async function migrateDatabase() {
  try {
    // Versuche die neuen Spalten hinzuzufügen, falls sie nicht existieren
    await sql`
      ALTER TABLE rally_checkins 
      ADD COLUMN IF NOT EXISTS is_correct BOOLEAN DEFAULT NULL,
      ADD COLUMN IF NOT EXISTS manually_verified BOOLEAN DEFAULT FALSE
    `
    console.log('Database migration successful')
  } catch (error) {
    console.error('Migration error:', error)
    throw error
  }
}
