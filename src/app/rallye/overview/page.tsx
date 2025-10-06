'use client'

import { useEffect, useState } from 'react'
import RallyPageWrapper from '../../../components/RallyPageWrapper'
import { getStationNameByPageId } from '../../../data/rallyStations'
import { RallyUserWithCheckins } from '../../../lib/database'

interface RallyOverviewResponse {
  success: boolean
  users: RallyUserWithCheckins[]
  error?: string
}

export default function RallyOverview() {
  const [users, setUsers] = useState<RallyUserWithCheckins[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/rally/users')
      const data: RallyOverviewResponse = await response.json()

      if (data.success && data.users) {
        setUsers(data.users)
      } else {
        setError('Fehler beim Laden der Daten')
      }
    } catch (err) {
      setError('Fehler beim Laden der Daten')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getStationName = (pageId: string) => {
    return getStationNameByPageId(pageId)
  }

  if (loading) {
    return (
      <RallyPageWrapper>
        <div className='max-w-6xl mx-auto p-6'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto'></div>
            <p className='mt-4 text-gray-600'>Lade Daten...</p>
          </div>
        </div>
      </RallyPageWrapper>
    )
  }

  if (error) {
    return (
      <RallyPageWrapper>
        <div className='max-w-6xl mx-auto p-6'>
          <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
            <h2 className='text-lg uppercase font-tally text-red-600 mb-2'>Fehler</h2>
            <p className='text-red-700'>{error}</p>
            <button
              onClick={fetchUsers}
              className='mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      </RallyPageWrapper>
    )
  }

  return (
    <RallyPageWrapper>
      <div className='max-w-6xl mx-auto p-6'>
        <h1 className='w-full text-xl text-center uppercase font-tally text-orange-dark mb-8'>
          Rally Übersicht
        </h1>

        <div className='mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4'>
          <h2 className='text-lg uppercase font-tally text-green mb-2'>Statistiken</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-600'>{users.length}</div>
              <div className='text-blue-700'>Teilnehmer</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-600'>
                {users.reduce((total, user) => total + (user.checkins?.length || 0), 0)}
              </div>
              <div className='text-blue-700'>Gesamt Check-ins</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-600'>
                {users.filter((user) => user.checkins?.length >= 17).length}
              </div>
              <div className='text-blue-700'>Alle Stationen besucht</div>
            </div>
          </div>
        </div>

        {users.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-600 text-lg'>Noch keine Teilnehmer registriert.</p>
          </div>
        ) : (
          <div className='space-y-6'>
            {users.map((user) => (
              <div
                key={user.id}
                className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'
              >
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-800'>{user.name}</h3>
                    <p className='text-gray-600'>Registriert am: {formatDate(user.created_at)}</p>
                  </div>
                  <div className='text-right'>
                    <div className='text-sm text-gray-600'>Check-ins</div>
                    <div className='text-2xl font-bold text-blue-600'>
                      {user.checkins?.length || 0}
                    </div>
                  </div>
                </div>

                {user.checkins && user.checkins.length > 0 ? (
                  <div className='space-y-4'>
                    <h4 className='font-semibold text-gray-700 border-b pb-2'>
                      Besuchte Stationen:
                    </h4>
                    {user.checkins.map((checkin) => (
                      <div key={checkin.id} className='bg-gray-50 p-4 rounded-lg'>
                        <div className='flex justify-between items-start mb-2'>
                          <h5 className='font-medium text-gray-800'>
                            {getStationName(checkin.page_id)}
                          </h5>
                          <span className='text-sm text-gray-600'>
                            {formatDate(checkin.timestamp)}
                          </span>
                        </div>
                        <div className='text-gray-700'>
                          <span className='font-medium'>Antwort:</span> {checkin.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-gray-500 italic'>Noch keine Stationen besucht</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </RallyPageWrapper>
  )
}
