import { Analytics } from '@vercel/analytics/react'
import Footer from 'components/Footer'
import { metaData, organizationJsonLd, websiteJsonLd } from 'constants/pageMetadata'
import type { Viewport } from 'next'
import './globals.css'

export const metadata = metaData.home

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='p-0 m-0 scrollbar-hide' lang='de'>
      <body className='p-0 m-0 font-sans text-base scrollbar-hide text-black/70'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [organizationJsonLd, websiteJsonLd],
            }),
          }}
        />
        <div className='max-w-screen-lg mx-auto'>
          <div className='w-full shadow-[rgba(0,0,15,0.3)_0px_0px_15px_0px]'>
            <main className='w-full'>{children}</main>
            <Footer />
          </div>
          <div className='w-full'>
            <p className='p-4 text-xs text-end lg:px-0'>
              &copy; {new Date().getFullYear()} {metadata.title as string}
            </p>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
