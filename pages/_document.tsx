import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="ja"
      prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# website: https://ogp.me/ns/website#"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
