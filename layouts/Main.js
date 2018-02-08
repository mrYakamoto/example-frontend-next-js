import Head from 'next/head'

import foundationNormalize from 'lib/foundation-normalize'
import foundationGrid from 'lib/foundation-xy-grid'

import Header from 'components/Header'
import Footer from 'components/Footer'

const MainLayout = props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Jason O. Gilbert</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <link href="/static/css/typography.css" rel="stylesheet" />
    </Head>
    <Header />
    <div id="main">
      {props.children}
    </div>
    <Footer />
    <style jsx global>{foundationNormalize}</style>
    <style jsx global>{foundationGrid}</style>
  </div>
)

export default MainLayout
