import Header from 'components/Header'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.mitgliedWerden

export default function MemberPage() {
  return (
    <div className='h-screen'>
      <Header size='small' />
      <section>
        <h1 className='font-tally text-xl text-orange-dark w-full text-center uppercase'>
          Mitglied werden
        </h1>
      </section>
    </div>
  )
}
