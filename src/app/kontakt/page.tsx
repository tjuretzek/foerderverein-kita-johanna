import JsonLd from 'components/JsonLd'
import Page from 'components/Page'
import Person from 'components/Person'
import { buildBreadcrumb, contactPageJsonLd, metaData } from 'constants/pageMetadata'
import Image from 'next/image'

export const metadata = metaData.kontakt

export default function ContactPage() {
  return (
    <Page title='Kontakt' subtitle='Kontaktieren Sie uns gerne bei Fragen oder Anregungen.'>
      <JsonLd data={contactPageJsonLd} />
      <JsonLd
        data={buildBreadcrumb([
          { name: 'Startseite', path: '/' },
          { name: 'Kontakt', path: '/kontakt' },
        ])}
      />
      <h2 className='font-tally text-lg w-full uppercase text-green mt-12'>Das sind wir</h2>
      <div className='flex flex-wrap mt-6 justify-center md:justify-between'>
        <Person name='Jennifer Feldkamp' position='Vorsitzende' src='/jennifer-feldkamp.png' />
        <Person name='Katharina Rokahr' position='Vorsitzende' src='/katharina-rokahr.png' />
        <Person name='Anna aus dem Moore' position='Kassenwartin' src='/anna-aus-dem-moore.png' />
        <Person name='Friederike Olberding' position='Schriftführerin' src='/friederike-olberding.png' />
        <Person name='Esta Brinkmann' position='Kassenprüferin' src='/esta-brinkmann.png' />
        <Person
          name='Britta Lemmermöhle'
          position='Kassenprüferin'
          src='/britta-lemmermoehle.png'
        />
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-4 w-full mt-12'>
        <div className='w-full md:w-1/2 flex flex-wrap gap-4 content-start'>
          <h2 className='font-tally text-lg w-full uppercase text-green'>Anschrift</h2>
          <h3 className='font-bold w-full'>
            Freunde und Förderer Kita und Familienzentrum Johanna Alfhausen e.V.
          </h3>
          <p className='w-full'>
            Alte Schulstraße 8<br />
            49594 Alfhausen
          </p>
          <p className='w-full'>Telefon: 05464/9678720 (Kita)</p>
          <p className='w-full'>
            Mail:{' '}
            <a
              href='mailto:foerderverein-kita-johanna@t-online.de'
              className='underline text-green hover:text-green-dark hover:no-underline'
              title={`Mail an den ${metadata.title}`}
            >
              foerderverein-kita-johanna@t-online.de
            </a>
          </p>
        </div>
        <div className='w-full md:w-1/2 flex flex-wrap gap-2 content-start'>
          <Image
            src='/kita-johanna.png'
            alt='Freunde und Förderer Kita und Familienzentrum Johanna Alfhausen e.V.'
            height={640}
            width={970}
          />
          <p className='w-full text-xs text-end'>Außenansicht Kita Johanna Alfhausen</p>
        </div>
      </div>
    </Page>
  )
}
