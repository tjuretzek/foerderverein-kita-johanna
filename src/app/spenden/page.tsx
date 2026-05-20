import JsonLd from 'components/JsonLd'
import Page from 'components/Page'
import { buildBreadcrumb, donateActionJsonLd, metaData } from 'constants/pageMetadata'

export const metadata = metaData.spenden

export default function DonatePage() {
  return (
    <Page title='Spenden' subtitle='Auch ohne Mitgliedschaft kann gespendet werden!'>
      <JsonLd data={donateActionJsonLd} />
      <JsonLd
        data={buildBreadcrumb([
          { name: 'Startseite', path: '/' },
          { name: 'Spenden', path: '/spenden' },
        ])}
      />
      <div className='w-full flex flex-wrap gap-4'>
        <h2 className='font-tally text-lg w-full uppercase text-green mt-12'>Bankverbindung</h2>
        <h3 className='font-bold w-full'>Kreissparkasse Bersenbrück</h3>
        <p className='w-full'>IBAN: DE&nbsp;25&nbsp;2655&nbsp;1540&nbsp;0085&nbsp;4670&nbsp;33</p>
        <p className='w-full'>BIC: NOLADE21BEB</p>
        <p className='w-full text-sm'>
          Spenden sind steuerlich absetzbar. Bei Bedarf stellen wir Ihnen gerne eine
          Spendenquittung.
        </p>
      </div>
    </Page>
  )
}
