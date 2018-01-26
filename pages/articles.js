import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
import listStyles from './styles/list'

const query = `*[_type == "article"] {
  _id,
  title
}[0...50]
`

export default class Articles extends React.Component {

  static async getInitialProps() {
    return {
      articles: await sanity.fetch(query)
    }
  }

  render() {
    const {articles} = this.props
    return (
      <Layout>
        <ul className="list">
          {articles.map(article => (
            <li key={article._id} className="list__item">
              <Link href={{pathname: '/article', query: {id: article._id}}}>
                <a>
                  <h3>{article.title}</h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <style jsx>{listStyles}</style>
      </Layout>
    )
  }
}
