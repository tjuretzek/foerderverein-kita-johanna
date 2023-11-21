import Image from 'next/image'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'

import Footer from 'components/Footer'
import PageMetadata from 'components/PageMetadata'
import { TITLE } from 'constants/global'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageMetadata />
      <header className='w-full flex justify-center'>
        <Link to='/'>
          <div className='w-[240px] max-w-full'>
            <Image src='/logo.png' alt={TITLE} height={451} width={640} />
          </div>
        </Link>
      </header>
      <main className='w-full max-w-screen-lg mx-auto'>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </>
  )
}
