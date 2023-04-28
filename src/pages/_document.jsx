import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html className='h-full bg-gray-50 antialiased' lang='en'>
      <Head>
        <script src='/InspectletScript.js' type='text/javascript' />{' '}
        <script src='/FormillaScript.js' type='text/javascript' />
      </Head>
      <body className='flex h-full flex-col'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
