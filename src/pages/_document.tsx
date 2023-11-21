import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='p-0 m-0' lang='de'>
      <Head />
      <body className='p-0 m-0 font-sans text-primary cursor-default scrollbar-hide'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
