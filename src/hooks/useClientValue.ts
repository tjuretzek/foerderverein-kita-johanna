import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

/**
 * Liest einen nur im Browser verfügbaren Wert (localStorage, Datum o. ä.)
 * ohne setState im Effect. Auf dem Server und beim Hydrieren gilt serverValue.
 * getClient muss einen Primitive-Wert liefern (stabiler Vergleich).
 */
export function useClientValue<T>(getClient: () => T, serverValue: T): T {
  return useSyncExternalStore(noopSubscribe, getClient, () => serverValue)
}
