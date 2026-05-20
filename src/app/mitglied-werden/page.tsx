import JsonLd from 'components/JsonLd'
import MemberForm from 'components/MemberForm'
import Page from 'components/Page'
import { buildBreadcrumb, membershipOfferJsonLd, metaData } from 'constants/pageMetadata'

export const metadata = metaData.mitgliedWerden

export default function MemberPage() {
  return (
    <Page title='Mitglied werden' subtitle='Werde Vereinsmitglied für nur 1,- € pro Monat.'>
      <JsonLd data={membershipOfferJsonLd} />
      <JsonLd
        data={buildBreadcrumb([
          { name: 'Startseite', path: '/' },
          { name: 'Mitglied werden', path: '/mitglied-werden' },
        ])}
      />
      <MemberForm />
    </Page>
  )
}
