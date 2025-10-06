import { NextResponse } from 'next/server'
import { mergeUsers } from '../../../../../lib/database'

export async function POST(request: Request) {
  try {
    const { sourceUserId, targetUserId, password } = await request.json()

    // Passwort-Überprüfung
    if (password !== process.env.RALLY_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!sourceUserId || !targetUserId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (sourceUserId === targetUserId) {
      return NextResponse.json({ error: 'Cannot merge user with itself' }, { status: 400 })
    }

    await mergeUsers(sourceUserId, targetUserId)

    return NextResponse.json({
      success: true,
      message: 'Users merged successfully',
    })
  } catch (error) {
    console.error('Error merging users:', error)
    return NextResponse.json({ error: 'Failed to merge users' }, { status: 500 })
  }
}
