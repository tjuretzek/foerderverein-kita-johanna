'use client'

import { useEffect, useState } from 'react'
import { rallyStations } from '../../../data/rallyStations'
import { RallyUserWithCheckins } from '../../../lib/database'

// Verhindere statisches Rendering wegen sessionStorage
export const dynamic = 'force-dynamic'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState<RallyUserWithCheckins[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCheckin, setSelectedCheckin] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)
  const [mergeMode, setMergeMode] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'name' | 'erreicht' | 'korrekt'>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    // Check if already authenticated from sessionStorage
    const savedPassword = sessionStorage.getItem('rally_admin_auth')
    if (savedPassword) {
      setPassword(savedPassword)
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers()
      // Auto-refresh alle 10 Sekunden
      const interval = setInterval(fetchUsers, 10000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/rally/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, checkAuth: true }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        setPassword('')
        sessionStorage.setItem('rally_admin_auth', password)
      } else {
        alert('Falsches Passwort')
      }
    } catch (error) {
      alert('Fehler bei der Anmeldung')
    }
  }

  // Helper functions
  const countCorrectAnswers = (user: RallyUserWithCheckins): number => {
    return user.checkins?.filter((c) => c.is_correct === true).length || 0
  }

  const getStationNumber = (pageId: string): number | null => {
    const slug = pageId.replace('rallye-', '')
    const station = rallyStations.find((s) => s.slug === slug)
    return station?.number || null
  }

  const getStationCheckin = (user: RallyUserWithCheckins, stationNumber: number) => {
    return user.checkins?.find((c) => {
      const num = getStationNumber(c.page_id)
      return num === stationNumber
    })
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/rally/users')
      const data = await response.json()

      if (data.success && data.users) {
        setUsers(data.users)
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSort = (column: 'name' | 'erreicht' | 'korrekt') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortDirection('asc')
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    let comparison = 0

    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name)
    } else if (sortBy === 'erreicht') {
      const aReached = a.checkins?.length || 0
      const bReached = b.checkins?.length || 0
      comparison = aReached - bReached
    } else if (sortBy === 'korrekt') {
      const aCorrect = countCorrectAnswers(a)
      const bCorrect = countCorrectAnswers(b)
      comparison = aCorrect - bCorrect
    }

    return sortDirection === 'asc' ? comparison : -comparison
  })

  const verifyAnswer = async (checkinId: string, isCorrect: boolean) => {
    try {
      const savedPassword = sessionStorage.getItem('rally_admin_auth')
      const response = await fetch('/api/rally/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checkinId, isCorrect, password: savedPassword }),
      })

      if (response.ok) {
        setSelectedCheckin(null)
        fetchUsers()
      }
    } catch (error) {
      console.error('Error verifying answer:', error)
    }
  }

  const mergeUsers = async () => {
    if (selectedUsers.length !== 2) {
      alert('Bitte wählen Sie genau 2 Benutzer zum Verschmelzen aus')
      return
    }

    const targetName = prompt(
      'Welcher Name soll behalten werden?',
      users.find((u) => u.id === selectedUsers[0])?.name,
    )

    if (!targetName) return

    try {
      const savedPassword = sessionStorage.getItem('rally_admin_auth')
      const response = await fetch('/api/rally/admin/merge-users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceUserId: selectedUsers[1],
          targetUserId: selectedUsers[0],
          password: savedPassword,
        }),
      })

      if (response.ok) {
        setSelectedUsers([])
        setMergeMode(false)
        fetchUsers()
      }
    } catch (error) {
      console.error('Error merging users:', error)
    }
  }

  if (!isAuthenticated) {
    return (
      <div
        data-admin-dashboard
        className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4'
      >
        <div className='w-full max-w-md'>
          <div className='text-center mb-8'>
            <div className='inline-block bg-green-600 p-4 rounded-full mb-4'>
              <svg
                className='w-12 h-12 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </div>
            <h1 className='text-3xl font-bold text-white mb-2'>Admin Dashboard</h1>
            <p className='text-gray-400'>Alfhausen Rallye</p>
          </div>

          <form
            onSubmit={handleLogin}
            className='bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700'
          >
            <div className='mb-5'>
              <label className='block text-gray-300 mb-2 text-sm font-medium'>Benutzername</label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  value='admin'
                  disabled
                  className='w-full pl-10 pr-3 py-3 bg-gray-700 text-gray-400 rounded-lg border border-gray-600'
                />
              </div>
            </div>

            <div className='mb-6'>
              <label className='block text-gray-300 mb-2 text-sm font-medium'>Passwort</label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                    />
                  </svg>
                </div>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••••••'
                  className='w-full pl-10 pr-3 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition'
                  autoFocus
                />
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg'
            >
              Anmelden
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-gray-500 text-sm'>Zugriff nur für autorisierte Administratoren</p>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div
        data-admin-dashboard
        className='min-h-screen w-full bg-gray-900 text-white flex items-center justify-center'
      >
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4'></div>
          <p>Lade Daten...</p>
        </div>
      </div>
    )
  }

  return (
    <div data-admin-dashboard className='min-h-screen w-full bg-gray-900 text-white p-6'>
      <div className='w-full max-w-full'>
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold'>Alfhausen Rallye - Admin Dashboard</h1>
          <div className='flex gap-2'>
            <button
              onClick={async () => {
                if (
                  confirm(
                    'Datenbank komplett leeren? Diese Aktion kann nicht rückgängig gemacht werden!',
                  )
                ) {
                  const savedPassword = sessionStorage.getItem('rally_admin_auth')
                  const response = await fetch('/api/rally/admin/reset-db', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password: savedPassword }),
                  })
                  if (response.ok) {
                    alert('Datenbank wurde geleert')
                    fetchUsers()
                  }
                }
              }}
              className='px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700 transition text-sm'
            >
              DB Reset
            </button>
            <button
              onClick={() => setMergeMode(!mergeMode)}
              className={`px-4 py-2 rounded transition ${
                mergeMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {mergeMode ? 'Abbrechen' : 'Benutzer verschmelzen'}
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem('rally_admin_auth')
                setIsAuthenticated(false)
              }}
              className='px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition'
            >
              Abmelden
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-3 gap-4 mb-6'>
          <div className='bg-gray-800 p-4 rounded'>
            <div className='text-gray-400 text-sm'>Teilnehmer</div>
            <div className='text-3xl font-bold'>{users.length}</div>
          </div>
          <div className='bg-gray-800 p-4 rounded'>
            <div className='text-gray-400 text-sm'>Gesamt Check-ins</div>
            <div className='text-3xl font-bold'>
              {users.reduce((total, user) => total + (user.checkins?.length || 0), 0)}
            </div>
          </div>
          <div className='bg-gray-800 p-4 rounded'>
            <div className='text-gray-400 text-sm'>Alle Stationen erreicht</div>
            <div className='text-3xl font-bold'>
              {users.filter((user) => user.checkins?.length >= 17).length}
            </div>
          </div>
        </div>

        {mergeMode && (
          <div className='bg-blue-900 border border-blue-700 p-4 rounded mb-4'>
            <p className='mb-2'>
              Verschmelze-Modus: Wählen Sie 2 Benutzer aus ({selectedUsers.length}/2)
            </p>
            {selectedUsers.length === 2 && (
              <button
                onClick={mergeUsers}
                className='bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition'
              >
                Benutzer verschmelzen
              </button>
            )}
          </div>
        )}

        {/* Table */}
        <div className='bg-gray-800 rounded-lg overflow-visible' style={{ overflow: 'visible' }}>
          <div className='overflow-x-auto' style={{ overflowY: 'visible' }}>
            <table className='w-full' style={{ overflow: 'visible' }}>
              <thead className='bg-gray-700'>
                <tr>
                  {mergeMode && (
                    <th className='px-4 py-3 text-left text-sm font-semibold'>Auswahl</th>
                  )}
                  <th
                    className='px-4 py-3 text-left text-sm font-semibold cursor-pointer hover:bg-gray-600 transition'
                    onClick={() => handleSort('name')}
                  >
                    <div className='flex items-center gap-2'>
                      Name
                      {sortBy === 'name' && (
                        <span className='text-xs'>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                      )}
                    </div>
                  </th>
                  <th className='px-4 py-3 text-center text-sm font-semibold'>Stationen (1-17)</th>
                  <th
                    className='px-4 py-3 text-center text-sm font-semibold cursor-pointer hover:bg-gray-600 transition'
                    onClick={() => handleSort('erreicht')}
                  >
                    <div className='flex items-center justify-center gap-2'>
                      Erreicht
                      {sortBy === 'erreicht' && (
                        <span className='text-xs'>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                      )}
                    </div>
                  </th>
                  <th
                    className='px-4 py-3 text-center text-sm font-semibold cursor-pointer hover:bg-gray-600 transition'
                    onClick={() => handleSort('korrekt')}
                  >
                    <div className='flex items-center justify-center gap-2'>
                      Korrekt
                      {sortBy === 'korrekt' && (
                        <span className='text-xs'>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-700'>
                {sortedUsers.map((user) => {
                  const correctAnswers = countCorrectAnswers(user)
                  const totalStations = user.checkins?.length || 0

                  return (
                    <tr
                      key={user.id}
                      className={`hover:bg-gray-750 transition relative ${
                        selectedUsers.includes(user.id) ? 'bg-blue-900' : ''
                      }`}
                      style={{ overflow: 'visible' }}
                    >
                      {mergeMode && (
                        <td className='px-4 py-3'>
                          <input
                            type='checkbox'
                            checked={selectedUsers.includes(user.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                if (selectedUsers.length < 2) {
                                  setSelectedUsers([...selectedUsers, user.id])
                                }
                              } else {
                                setSelectedUsers(selectedUsers.filter((id) => id !== user.id))
                              }
                            }}
                            className='w-4 h-4'
                          />
                        </td>
                      )}
                      <td className='px-4 py-3 font-medium'>{user.name}</td>
                      <td className='px-4 py-8 relative' style={{ overflow: 'visible' }}>
                        {/* Station Circles */}
                        <div className='flex gap-1 justify-center items-center'>
                          {Array.from({ length: 17 }, (_, i) => i + 1).map((stationNum) => {
                            const checkin = getStationCheckin(user, stationNum)
                            return (
                              <div
                                key={stationNum}
                                className='relative group'
                                onClick={(e) => {
                                  if (checkin) {
                                    const rect = e.currentTarget.getBoundingClientRect()
                                    setTooltipPosition({
                                      x: rect.left + rect.width / 2,
                                      y: rect.bottom + 8,
                                    })
                                    setSelectedCheckin(
                                      selectedCheckin === checkin.id ? null : checkin.id,
                                    )
                                  }
                                }}
                                onMouseEnter={(e) => {
                                  if (checkin && selectedCheckin !== checkin.id) {
                                    const rect = e.currentTarget.getBoundingClientRect()
                                    setTooltipPosition({
                                      x: rect.left + rect.width / 2,
                                      y: rect.bottom + 8,
                                    })
                                  }
                                }}
                              >
                                <div
                                  className='w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition'
                                  style={{
                                    backgroundColor: !checkin
                                      ? '#374151'
                                      : checkin.is_correct === true
                                        ? '#7AB542'
                                        : '#dc2626',
                                    borderColor: !checkin
                                      ? '#4b5563'
                                      : checkin.is_correct === true
                                        ? '#048242'
                                        : '#b91c1c',
                                  }}
                                >
                                  {checkin && checkin.is_correct === true && (
                                    <span className='text-white text-sm font-bold'>✓</span>
                                  )}
                                  {checkin && checkin.is_correct === false && (
                                    <span className='text-white text-xs'>
                                      ✕{!checkin.manually_verified && '?'}
                                    </span>
                                  )}
                                  {!checkin && (
                                    <span className='text-gray-500 text-xs'>{stationNum}</span>
                                  )}
                                </div>

                                {/* Tooltip - wird am Ende der Seite gerendert */}
                              </div>
                            )
                          })}
                        </div>
                      </td>
                      <td className='px-4 py-3 text-center font-semibold'>{totalStations}/17</td>
                      <td className='px-4 py-3 text-center font-semibold'>
                        <span
                          className={
                            correctAnswers === totalStations ? 'text-green-400' : 'text-yellow-400'
                          }
                        >
                          {correctAnswers}/{totalStations}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {users.length === 0 && (
          <div className='text-center py-12 text-gray-400'>Noch keine Teilnehmer registriert.</div>
        )}

        {/* Global Tooltip - rendered outside table */}
        {selectedCheckin &&
          tooltipPosition &&
          users.map((user) => {
            const allCheckins = user.checkins || []
            const checkin = allCheckins.find((c) => c.id === selectedCheckin)
            if (!checkin) return null

            const stationNum = getStationNumber(checkin.page_id)

            return (
              <div
                key={checkin.id}
                className='fixed bg-gray-900 border border-gray-600 rounded p-3 shadow-2xl min-w-64'
                style={{
                  left: `${tooltipPosition.x}px`,
                  top: `${tooltipPosition.y}px`,
                  transform: 'translateX(-50%)',
                  zIndex: 10000,
                }}
              >
                <div className='text-xs mb-2'>
                  <strong>Station {stationNum}</strong>
                </div>
                <div className='text-xs mb-1'>
                  Erreicht am: {new Date(checkin.timestamp).toLocaleString('de-DE')}
                </div>
                <div className='text-xs mb-3'>
                  <strong>Antwort:</strong> {checkin.answer}
                </div>

                <div>
                  <div className='text-xs mb-2 font-semibold'>Antwort richtig?</div>
                  <div className='flex gap-2'>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        verifyAnswer(checkin.id, true)
                      }}
                      className='flex-1 px-3 py-1 rounded text-xs text-white font-semibold transition'
                      style={{ backgroundColor: '#16a34a' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#16a34a')}
                    >
                      Ja
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        verifyAnswer(checkin.id, false)
                      }}
                      className='flex-1 px-3 py-1 rounded text-xs text-white font-semibold transition'
                      style={{ backgroundColor: '#dc2626' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
                    >
                      Nein
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
