import { Suspense } from 'react'

import Footer from 'components/Footer'
import PageMetadata from 'components/PageMetadata'
import { TITLE } from 'constants/global'
import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageMetadata />
      <header className='w-full flex justify-center'>
        <Link to='/'>
          <img src='/logo.png' alt={TITLE} className='w-[240px] max-w-full' />
        </Link>
      </header>
      <main className='w-full max-w-screen-lg mx-auto'>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </>
  )
}
