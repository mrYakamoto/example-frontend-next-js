import Head from 'next/head'

import styles from './styles/layout'
import foundationNormalize from './styles/foundation-normalize'
import foundationGrid from './styles/foundation-xy-grid'

import Header from './Header'

const Layout = props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Jason O. Gilbert</title>
    </Head>
    <Header />
    <div id="main">
      {props.children}
    </div>
    <footer>
      <h1>FOOTER</h1>
    </footer>
    <style jsx global>{foundationNormalize}</style>
    <style jsx global>{foundationGrid}</style>
    <style jsx>{styles}</style>
  </div>
)

export default Layout
