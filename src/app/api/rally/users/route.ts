import { NextResponse } from 'next/server'
import { getAllUsersWithCheckins, initDatabase } from '../../../../lib/database'

export async function GET() {
  try {
    // Initialize database tables if they don't exist
    await initDatabase()

    const users = await getAllUsersWithCheckins()

    return NextResponse.json({
      success: true,
      users,
    })
  } catch (error) {
    console.error('Error fetching rally users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
