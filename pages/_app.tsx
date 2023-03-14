import '@/styles/globals.css'

import type { AppPropsWithLayout } from 'next/app'
import { Noto_Sans_JP } from 'next/font/google'

import Layout from '@/components/layout/Layout'

const Noto_Sans_JP_Normal = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${Noto_Sans_JP_Normal.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
