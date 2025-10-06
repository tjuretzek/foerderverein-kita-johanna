import { NextResponse } from 'next/server'
import { updateCheckinVerification } from '../../../../../lib/database'

export async function POST(request: Request) {
  try {
    const { checkinId, isCorrect, password, checkAuth } = await request.json()

    // Passwort-Überprüfung
    if (password !== process.env.RALLY_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Nur Authentifizierung prüfen
    if (checkAuth) {
      return NextResponse.json({ success: true })
    }

    if (!checkinId || typeof isCorrect !== 'boolean') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const checkin = await updateCheckinVerification(checkinId, isCorrect)

    return NextResponse.json({
      success: true,
      checkin,
    })
  } catch (error) {
    console.error('Error verifying checkin:', error)
    return NextResponse.json({ error: 'Failed to verify checkin' }, { status: 500 })
  }
}
