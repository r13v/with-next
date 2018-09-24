import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(context) {
    // intl
    const {
      req: { locale, localeDataScript },
      renderPage
    } = context

    // styled-components
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (p) => sheet.collectStyles(<App {...p} />))
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      locale,
      localeDataScript,
      styleTags
    }
  }

  render() {
    const { locale, localeDataScript, styleTags } = this.props

    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${locale}`

    return (
      <html>
        <Head>
          <title>With next.js</title>
          {styleTags}
        </Head>
        <body>
          <Main />

          <script src={polyfill} />
          <script dangerouslySetInnerHTML={{ __html: localeDataScript }} />

          <NextScript />
        </body>
      </html>
    )
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument
