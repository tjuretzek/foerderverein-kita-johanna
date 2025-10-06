// Rally Event Konfiguration
export const rallyConfig = {
  // Zeitraum in UTC+2 (Europe/Berlin)
  startDate: new Date('2025-10-06T00:00:00+02:00'),
  endDate: new Date('2025-10-12T23:59:59+02:00'),

  // Name des Events (optional für zukünftige Verwendung)
  eventName: 'Alfhausen Rallye',
  eventDate: '12.10.2025',
}

// Helper-Funktion um zu prüfen ob die Rallye aktiv ist
export function isRallyActive(): boolean {
  const now = new Date()
  return now >= rallyConfig.startDate && now <= rallyConfig.endDate
}

// Helper-Funktion um zu prüfen ob die Rallye vorbei ist
export function isRallyEnded(): boolean {
  const now = new Date()
  return now > rallyConfig.endDate
}
