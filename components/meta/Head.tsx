import Head from 'next/head'

type customHeadProps = {
  title: string
  ogp: {
    image?: string
    url: string
  }
}

const CustomHead: React.FC<customHeadProps> = ({ title, ogp }) => {
  const siteName = 'sushichan.live'
  const description = 'スシ'
  const domainUrl = 'https://sushichan.live'
  const defaultOGPImageUrl = (ogp.image ??= `${domainUrl}/ogp.png`)
  const OGPUrl =
    ogp.url === '/'
      ? domainUrl
      : ogp.url.startsWith('/')
      ? `${domainUrl}${ogp.url}`
      : ogp.url

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        // href="/favicon-32x32.png"
        href="/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        // href="/favicon-16x16.png"
        href="/favicon.ico"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultOGPImageUrl} />
      <meta property="og:url" content={OGPUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={defaultOGPImageUrl} />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content={domainUrl} />
    </Head>
  )
}

export default CustomHead
