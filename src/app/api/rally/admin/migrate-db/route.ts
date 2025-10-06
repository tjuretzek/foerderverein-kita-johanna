import { NextResponse } from 'next/server'
import { migrateDatabase } from '../../../../../lib/migrations'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    // Passwort-Überprüfung
    if (password !== process.env.RALLY_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await migrateDatabase()

    return NextResponse.json({
      success: true,
      message: 'Database migrated successfully',
    })
  } catch (error) {
    console.error('Error migrating database:', error)
    return NextResponse.json({ error: 'Failed to migrate database' }, { status: 500 })
  }
}
