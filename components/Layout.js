import Head from 'next/head'
import Link from 'next/link'
import globalStyles from './styles/global'
import foundationNormalize from './styles/foundation-normalize'
import foundationGrid from './styles/foundation-xy-grid'
import styles from './styles/layout'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Jason O. Gilbert</title>
    </Head>
    <nav>
      <Link href="/articles"><a>About Me</a></Link>
    </nav>
    <div id="main">
      {props.children}
    </div>
    <footer>
      <h1>FOOTER</h1>
    </footer>
    <style jsx>{styles}</style>
    <style jsx global>{globalStyles}</style>
    <style jsx global>{foundationNormalize}</style>
    <style jsx global>{foundationGrid}</style>
  </div>
)
