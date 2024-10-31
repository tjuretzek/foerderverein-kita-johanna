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
      <body className='p-0 m-0 font-sans text-base scrollbar-hide text-black/70'>
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
