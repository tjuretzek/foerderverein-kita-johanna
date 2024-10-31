import MemberForm from 'components/MemberForm'
import Page from 'components/Page'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.mitgliedWerden

export default function MemberPage() {
  return (
    <Page title='Mitglied werden' subtitle='Werde Vereinsmitglied für nur 1,- € pro Monat.'>
      <MemberForm />
    </Page>
  )
}
