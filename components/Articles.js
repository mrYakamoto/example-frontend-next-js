import React from 'react'
import Link from 'next/link'

import Layout from 'layouts/Main'
import Article from 'components/Article'
import styles from './styles/articles'

export default class Articles extends React.Component {
  state = {
    items: this.props.articles
  }

  render() {
    let {articles} = this.props

    return (
      <div className='articles-container cell'>
        <div className='list grid-x grid-padding-x small-up-1 large-up-2 small-padding-collapse'>
          {articles.length &&
            articles.map((article, i) => {
              let transitionValue = `opacity 500ms ease-in-out ${i * 500}ms`

              return (
                <div className='list__item cell' key={article._id}>
                  <Article {...article} />
                </div>
              )
            })
          }
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
