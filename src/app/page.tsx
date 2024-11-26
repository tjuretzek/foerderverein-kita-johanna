import Button from 'components/Button'
import Header from 'components/Header'
import { metaData } from 'constants/pageMetadata'
import Image from 'next/image'

export const metadata = metaData.home

export default function Home() {
  return (
    <div className='bg-green p-6 text-secondary min-h-page'>
      <Header size='large' />
      <section className='flex flex-wrap gap-2 w-full z-0'>
        <h1 className='font-tally text-xl w-full text-center uppercase'>Seid dabei!</h1>
        <h2 className='font-tally text-lg w-full text-center uppercase'>
          Zusammen sind wir stark!
        </h2>
        <p className='text-center w-full'>
          Mitglied des Vereins kann jede Person werden. Bei Minderjährigen ist der Aufnahmeantrag
          durch die gesetzlichen Vertreter zu stellen.
        </p>
        <div className='flex w-full justify-center flex-wrap mt-6 gap-4'>
          <Button href='/mitglied-werden' text='Mitglied werden' type='primary' />
          <Button href='/spenden' text='Spenden' type='secondary' />
        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-4 w-full mt-12'>
          <div className='w-full md:w-1/2 flex flex-wrap gap-4 content-start'>
            <h2 className='font-tally text-lg w-full uppercase'>Ziele & Absichten</h2>
            <h3 className='italic w-full'>„Spiel ist die höchste Form der Kindesentwicklung.“</h3>
            <p className='w-full'>
              Im Mittelpunkt unseres Handelns stehen die Kinder und ihre Bedürfnisse. Dort wo das
              Budget der Einrichtung nicht reicht, wollen wir finanziell und organisatorisch die
              Arbeit der Kita und des Familienzentrums unterstützen.
            </p>
            <p className='font-bold'>Beispiele</p>
            <ul className='list-disc list-inside m-0 p-0'>
              <li className='my-2'>Anschaffung von Spielgeräten</li>
              <li className='my-2'>Beschaffung von Einrichtungsgegenständen</li>
              <li className='my-2'> Unterstützung von Ausflügen & Veranstaltungen</li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-wrap gap-2 content-start'>
            <Image
              src='/spielplatz.png'
              alt='Spiel ist die höchste Form der Kindesentwicklung.'
              height={640}
              width={970}
            />
            <p className='w-full text-xs text-end'>Spielplatz im Außenbereich der Kita Johanna</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 w-full mt-12 justify-center'>
          <h2 className='font-tally text-lg w-full text-center uppercase'>
            Ideen?
            <br />
            Anregungen?
          </h2>
          <p className='text-center w-full'>
            Sie haben Fragen, Ideen oder Anregungen? Dann treten Sie mit uns in Kontakt.
            <br />
            Wir freuen uns über jeden Beitrag!
          </p>
          <Button href='/kontakt' text='Kontakt' type='primary' className='mt-2' />
        </div>
      </section>
    </div>
  )
}
