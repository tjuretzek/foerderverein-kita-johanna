import { NextResponse } from 'next/server'
import { createCheckin, createOrGetUser, initDatabase } from '../../../../lib/database'

export async function POST(request: Request) {
  try {
    // Initialize database tables if they don't exist
    await initDatabase()

    const { name, pageId, answer } = await request.json()

    if (!name || !pageId || !answer) {
      return NextResponse.json(
        { error: 'Missing required fields: name, pageId, answer' },
        { status: 400 },
      )
    }

    // Create or get user
    const user = await createOrGetUser(name)

    // Create checkin
    const checkin = await createCheckin(user.id, pageId, answer)

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
