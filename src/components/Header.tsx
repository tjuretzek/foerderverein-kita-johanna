import Image from 'next/image'
import { Link } from 'react-router-dom'

import { TITLE } from 'constants/global'

export default function Header() {
  return (
    <header className='w-full flex justify-center mb-10'>
      <div className='w-[400px] max-w-full bg-secondary rounded-[50%] p-10 px-15'>
        <Link to='/' className='w-full'>
          <Image src='/logo.png' alt={TITLE} height={262} width={515} />
        </Link>
      </div>
    </header>
  )
}
