import React from 'react'
import { configuredSanityClient } from 'lib/sanity'

import Layout from 'layouts/Main'
import Articles from 'components/Articles'
import SideBar from 'components/SideBar'

const articlesQuery = `*[_type == 'article'] | order(weight desc, date desc) {
  _id,
  title,
  image,
  articleUrl,
  publication->{name},
  weight
} [0...50]
`

const publicationsQuery = `*[_type == 'publication'] | order(weight desc) {
  _id,
  name,
  image,
  weight,
  "articles": *[_type == 'article' && references(^._id)] | order(weight desc, date desc) {
    _id,
    title,
    articleUrl
  }
}`

export default class IndexPage extends React.Component {
  state = {
    activeArticleId: null
  }

  static async getInitialProps() {
    debugger
    return {
      articles: await configuredSanityClient.fetch(articlesQuery),
      publications: await configuredSanityClient.fetch(publicationsQuery)
    }
  }

  setActiveArticle = (articleId) => {
    if (!articleId && this.state.activeArticleId) {
      this.setState({
        activeArticleId: null
      })
    } else {
      this.setState({
        activeArticleId: articleId
      })
    }
  }

  render() {
    return (
      <Layout>
        <h1>ActiveId: {this.state.activeArticleId}</h1>
        <div className='grid-container fluid'>
          <div className='grid-x'>
            <div className='cell medium-4 grid-x grid-padding-x'>
              <SideBar
                publications={this.props.publications}
                activeArticleId={this.state.activeArticleId}
              />
            </div>
            <div className='cell medium-8 grid-x grid-padding-x'>
              <Articles
                articles={this.props.articles}
                activeArticleId={this.state.activeArticleId}
                setActiveArticle={this.setActiveArticle}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
