import Page from 'components/Page'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.mitgliedWerden

export default function MemberPage() {
  return (
    <Page title='Mitglied werden' subtitle='Werde Vereinsmitglied für nur 1,- € pro Monat.'>
      <form method='post' className='w-full p-0 m-0' action='https://endpoint.example.com'>
        <div className='flex flex-wrap w-full gap-4 mt-12 md:flex-nowrap'>
          <div className='flex flex-wrap w-full gap-4 md:w-1/2'>
            <h2 className='w-full text-lg uppercase font-tally text-green'>
              Beitritts&shy;erklärung
            </h2>
            <p className='text-justify'>
              Hiermit trete ich/wir dem Förderverein Kita & Familienzentrum Johanna Alfhausen e.V.
              bei. Gleichzeitig erkenne ich die Vereinssatzung an.
            </p>
            <p className='text-justify'>
              Über die{' '}
              <a
                href='/datenschutz-bestimmungen'
                target='_blank'
                title='Datenschutzbestimmungen'
                className='underline text-green hover:text-green-dark hover:no-underline'
              >
                Datenschutzbestimmungen
              </a>{' '}
              bin ich informiert.
            </p>
            <p className='text-justify'>
              Mitglied des Vereins kann jede Person werden. Bei Minderjährigen ist der
              Aufnahmeantrag durch die gesetzlichen Vertreter zu stellen.
            </p>
            <p className='text-justify'>
              Aufnahmeanträge können beim Vorstand oder der Kita-Leitung abgegeben werden.
              Vereinsaustritte sind jeweils schriftlich
            </p>
          </div>
          <div className='flex flex-wrap w-full gap-4 md:w-1/2'>
            {
              // FORUMLAR
            }
          </div>
        </div>
        <div className='flex flex-wrap w-full gap-4 mt-12 md:flex-nowrap'>
          <div className='flex flex-wrap w-full gap-4 md:w-1/2'>
            <h2 className='w-full text-lg uppercase font-tally text-green'>
              SEPA-Last&shy;schriftmandat
            </h2>
            <p className='text-justify'>Der jährliche Mitgliedsbeitrag beträgt 12 €.</p>
            <p className='text-sm text-justify'>
              (Bei Spenden und Mitgliedsbeiträgen bis 299 € gilt der Kontoauszug als Nachweis beim
              Finanzamt.)
            </p>
            <p className='text-justify'>
              Die Beiträge werden einmal jährlich, jeweils zum 1.03., von Ihrem angegebenen Konto
              abgebucht. Bei späteren Vereinseintritten erfolgt die Abbuchung 6 Wochen nach
              Vereinseintritt.
            </p>
            <p className='text-justify'>
              Gläubiger-Identifikationsnummer
              <br />
              DE94ZZZ00002505630
            </p>
            <p className='text-justify'>Verwendungszweck: Name des Mitglieds/Spenders</p>
            <p className='text-justify'>
              Ich ermächtige die Freunde und Förderer Kita und Familienzentrum Johanna Alfhausen
              e.V., Zahlungen von meinem Konto mittels Lastschrift einzuziehen. Zugleich weise ich
              mein Kreditinstitut an, die von den Freunden und Förderern Kita und Familienzentrum
              Johanna Alfhausen e.V. auf mein Konto gezogenen Lastschriften einzulösen.
            </p>
          </div>
          <div className='flex flex-wrap w-full gap-4 md:w-1/2'>
            {
              // FORUMLAR
            }
          </div>
        </div>
      </form>
    </Page>
  )
}
