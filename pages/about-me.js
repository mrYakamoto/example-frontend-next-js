import React from 'react'
import { configuredSanityClient } from 'lib/sanity'

import Layout from 'layouts/Main'


export default class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <div className='grid-container fluid'>
          <div className='grid-x'>
            <div className='cell medium-4 grid-x grid-padding-x'>
              <h1 className='cell'>
                Jason O. Gilbert
              </h1>
              <h2 className='cell'>
                Writer, editor, inspiration for the 2009 movie <i>Hotel for Dogs</i></h2>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
