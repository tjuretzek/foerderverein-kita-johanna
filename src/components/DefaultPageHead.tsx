import Head from 'next/head'

import { TITLE } from 'constants/global'

function DefaultPageHead() {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta charSet='utf-8' />
      <link href='/favicon.ico' rel='icon' />
      <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
      <link href='/site.webmanifest' rel='manifest' />
      <link color='#ffffff' href='/safari-pinned-tab.svg' rel='mask-icon' />
      <meta content='index,follow' name='robots' />
      <meta content='summary_large_image' name='twitter:card' />
      <meta content='https://foerderverein-kita-johanna.de' property='og:url' />
      <meta content='https://foerderverein-kita-johanna.de/banner.png' property='og:image' />
      <meta content={TITLE} property='og:site_name' />
      <meta content='#ffffff' name='msapplication-TileColor' />
      <meta content='#ffffff' name='theme-color' />
    </Head>
  )
}

export default DefaultPageHead
