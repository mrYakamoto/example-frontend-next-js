import React from 'react'
import sanity from '../lib/sanity'

import Layout from 'templates/Layout'
import Articles from 'components/Articles'
import SideBar from 'components/SideBar'

const articlesQuery = `*[_type == 'article'] {
  _id,
  title
}[0...50]
`

const publicationsQuery = `*[_type == 'publication'] {
  _id,
  name
}`

export default class IndexPage extends React.Component {
  static async getInitialProps() {
    return {
      articles: await sanity.fetch(articlesQuery),
      publications: await sanity.fetch(publicationsQuery)
    }
  }

  render() {
    return (
      <Layout>
        <div className='grid-container'>
          <div className='grid-x'>
            <div className='cell small-4 grid-x grid-padding-x'>
              <SideBar publications={this.props.publications}/>
            </div>
            <div className='cell small-8 grid-x grid-padding-x'>
              <Articles articles={this.props.articles}/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
