import { NextResponse } from 'next/server'
import { resetDatabase } from '../../../../../lib/migrations'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    // Passwort-Überprüfung
    if (password !== process.env.RALLY_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await resetDatabase()

    return NextResponse.json({
      success: true,
      message: 'Database reset successfully',
    })
  } catch (error) {
    console.error('Error resetting database:', error)
    return NextResponse.json({ error: 'Failed to reset database' }, { status: 500 })
  }
}
