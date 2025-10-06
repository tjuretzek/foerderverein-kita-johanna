import { NextResponse } from 'next/server'
import { createCheckin, createOrGetUser, initDatabase } from '../../../../lib/database'

export async function POST(request: Request) {
  try {
    // Initialize database tables if they don't exist
    await initDatabase()

    const { name, pageId, answer, expectedAnswer } = await request.json()

    if (!name || !pageId || !answer) {
      return NextResponse.json(
        { error: 'Missing required fields: name, pageId, answer' },
        { status: 400 },
      )
    }

    // Create or get user
    const user = await createOrGetUser(name)

    // Create checkin with expected answer for verification
    const checkin = await createCheckin(user.id, pageId, answer, expectedAnswer)

    return NextResponse.json({
      success: true,
      user,
      checkin,
    })
  } catch (error) {
    console.error('Error saving rally checkin:', error)
    return NextResponse.json({ error: 'Failed to save checkin' }, { status: 500 })
  }
}
