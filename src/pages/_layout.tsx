import { Suspense } from 'react'

import Footer from 'components/Footer'
import PageMetadata from 'components/PageMetadata'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageMetadata />
      <main className='w-full max-w-screen-lg mx-auto'>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </>
  )
}
