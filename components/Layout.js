import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/layout'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Jason O. Gilbert</title>
      <link rel="stylesheet" href="/static/css/foundation-normalize.css" />
      <link rel="stylesheet" href="/static/css/foundation-xy-grid.css" />
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
  </div>
)
