import Page from 'components/Page'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.spenden

export default function DonatePage() {
  return (
    <Page title='Spenden' subtitle='Auch ohne Mitgliedschaft kann gespendet werden!'>
      <div className='w-full flex flex-wrap gap-4'>
        <h2 className='font-tally text-lg w-full uppercase text-green mt-12'>Bankverbindung</h2>
        <h3 className='font-bold w-full'>Kreissparkasse Bersenbrück</h3>
        <p className='w-full'>
          IBAN: DE 25 2565 1540 0085 4670 33
          <br />
          BIC: NOLADE21BEB
        </p>
        <p className='w-full text-sm'>
          Spenden sind steuerlich absetzbar. Bei Bedarf stellen wir Ihnen gerne eine
          Spendenquittung.
        </p>
      </div>
    </Page>
  )
}
