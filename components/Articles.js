import React from 'react'
import Link from 'next/link'

import Layout from 'layouts/Main'
import Article from 'components/Article'
import styles from './styles/articles'

const Articles = (props) => {
  const {articles} = props

  return (
    <div className='articles-container cell'>
      <ul className="list grid-x grid-padding-x small-up-1 large-up-2 small-padding-collapse">
        {articles.length &&
          articles.map((article, i) => articleMapper(article, i))
        }
      </ul>
      <style jsx>{styles}</style>
    </div>
  )
}

const articleMapper = (article, i) => {
  const durationBetweenTrans = 100 * (i + 1)

  return (
    <li key={article._id} className="list__item cell">
      <Article {...article} durationBetweenTrans={durationBetweenTrans} />
    </li>
  )
}

export default Articles
