import React from 'react'
import Link from 'next/link'
import sanity from '../lib/sanity'

import Layout from 'layouts/Main'
import styles from './styles/article'

const query = `*[_type == "article" && _id == $id] {
  _id,
  title
}[0]
`

export default class Article extends React.Component {

  static async getInitialProps(req) {
    return {
      article: await sanity.fetch(query, {id: req.query.id})
    }
  }

  render() {
    const {article} = this.props
    return (
      <Layout>
        <div className="article">
          <div className="article__header">
            <h1>
              {article.title}
            </h1>
          </div>
        </div>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
