import Head from 'next/head'
import Link from 'next/link'
// import globalStyles from './styles/global.scss'
// import foundationNormalize from './styles/foundation-normalize.scss'
// import foundationGrid from './styles/foundation-xy-grid.scss'
// import styles from './styles/layout.scss'

// import { header } from './styles/variables'

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
    <style jsx>{`
      footer {
  background-color: red;
  padding: 5rem 1rem;
  text-align: center;
  font-size: 2rem;
}

footer img {
  display: inline-block;
  height: 1em;
  width: auto;
  padding: 0 0.4em;
}

nav {
  align-items: center;
  background-color: #333;
  display: flex;
  font-size: 1rem;
  height: 3.5rem;
  left: 0;
  padding: 0 1em;
  top: 0;
  width: 100%;
}

nav a {
  color: #fff;
  text-decoration: none;
}

    `}</style>
    {/*
    <style jsx global>{`${globalStyles}`}</style>
    <style jsx global>{foundationNormalize}</style>
    <style jsx global>{foundationGrid}</style>
    <style jsx>{`
      nav {
        height: ${ header.height }
      }
    `}</style>
    */}
  </div>
)
