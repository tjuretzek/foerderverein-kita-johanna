import Page from 'components/Page'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.datenschutz

export default function PrivacyPage() {
  return (
    <Page title='Datenschutz&shy;bestimmungen'>
      <div className='flex flex-wrap w-full gap-4 mt-12'>
        <h2 className='w-full text-lg uppercase font-tally text-green'>Hinweise zum Datenschutz</h2>
        <p className='text-justify'>
          Wir weisen darauf hin, dass zum Zwecke der Mitgliedschaft und Mitgliederverwaltung
          folgende automatisierte Daten der Mitglieder gespeichert, verarbeitet und genutzt werden:
          Name, Name des Kindes (optional), Anschrift, Telefonnummer, E-Mail-Adresse und
          Bankverbindung.
        </p>

        <p className='text-justify'>
          Eine Mitgliedschaft im Verein kann nur unter Angabe der obigen Daten erfolgen.
        </p>
        <p className='text-justify'>Die Daten werden nicht an Dritte weitergeleitet.</p>
        <p className='text-justify'>
          Eine Löschung der Daten erfolgt bei Austritt aus dem Förderverein.
        </p>
        <p className='text-justify'>
          Die Mitglieder sind jederzeit berechtigt, Auskunft über die zur Person gespeicherten Daten
          zu verlangen. Ebenso kann jederzeit die Löschung oder Sperrung einzelner personenbezogener
          Daten verlangt werden. Dieses Auskunfts- und Löschungsrecht kann bei den auf dem aktuellen
          Flyer benannten Vorstandsmitgliedern wahrgenommen werden.
        </p>
        <p className='mt-6 text-justify'>Alfhausen, Mai 2022</p>
      </div>
    </Page>
  )
}
