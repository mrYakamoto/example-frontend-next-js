import React from 'react'
import { configuredSanityClient } from 'lib/sanity'

import Layout from 'layouts/Main'
import Articles from 'components/Articles'
import SideBar from 'components/SideBar'

const articlesQuery = `*[_type == 'article'] {
  _id,
  title,
  image,
  articleUrl
}[0...50]
`

const publicationsQuery = `*[_type == 'publication'] {
  _id,
  name,
  logo,
  publicationUrl,
  "articles": *[_type == 'article' && references(^._id)]{
    title,
    articleUrl
  }
}`

export default class IndexPage extends React.Component {
  static async getInitialProps() {
    return {
      articles: await configuredSanityClient.fetch(articlesQuery),
      publications: await configuredSanityClient.fetch(publicationsQuery)
    }
  }

  render() {
    return (
      <Layout>
        <div className='grid-container fluid'>
          <div className='grid-x'>
            <div className='cell medium-4 grid-x grid-padding-x'>
              <SideBar publications={this.props.publications}/>
            </div>
            <div className='cell medium-8 grid-x grid-padding-x'>
              <Articles articles={this.props.articles}/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
