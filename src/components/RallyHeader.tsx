import { metaData } from 'constants/pageMetadata'
import Image from 'next/image'

export default function RallyHeader() {
  const title = metaData.home.title as string

  return (
    <header className='w-full flex mb-10 z-40 bg-green p-1 px-2 fixed md:relative'>
      <div className='bg-secondary rounded-[50%] w-[60px] p-2'>
        <a href='/' className='w-full'>
          <Image src='/logo.png' alt={title} height={262} width={515} />
        </a>
      </div>
    </header>
  )
}
