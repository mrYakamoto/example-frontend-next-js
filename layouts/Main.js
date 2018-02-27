import Head from 'next/head'

import foundationNormalize from 'lib/foundation-normalize'
import foundationGrid from 'lib/foundation-xy-grid'
import typography from 'static/css/typography.js'

import Header from 'components/Header'
import Footer from 'components/Footer'

const MainLayout = props => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jason O. Gilbert</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>
      <Header />
      <div id="main">
        {props.children}
      </div>
      <Footer />
      <style jsx global>{foundationNormalize}</style>
      <style jsx global>{foundationGrid}</style>
      <style jsx global>{typography}</style>
    </div>
  )
}

export default MainLayout
