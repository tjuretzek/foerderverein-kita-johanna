import { Analytics } from '@vercel/analytics/react'
import Footer from 'components/Footer'
import { metaData } from 'constants/pageMetadata'
import Head from 'next/head'
import './globals.css'

export const metadata = metaData.home

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='p-0 m-0 scrollbar-hide' lang='en'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className='p-0 m-0 scrollbar-hide'>
        <main className='w-full max-w-screen-lg mx-auto'>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
