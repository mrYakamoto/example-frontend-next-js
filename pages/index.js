import React from 'react'
import sanity from '../lib/sanity'

import Layout from '../components/Layout'
import Articles from '../components/Articles'
import SideBar from '../components/SideBar'

const query = `*[_type == "article"] {
  _id,
  title
}[0...50]
`

export default class IndexPage extends React.Component {
  static async getInitialProps() {
    return {
      articles: await sanity.fetch(query)
    }
  }

  render() {
    return (
      <Layout>
        <div className='grid-container'>
          <div className='grid-x grid-margin-x'>
            <div className='cell small-4 grid-x'>
              <SideBar />
            </div>
            <div className='cell small-8 grid-x'>
              <Articles articles={this.props.articles}/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
