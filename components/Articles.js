import React from 'react'
import Link from 'next/link'

import Layout from 'layouts/Main'
import Article from 'components/Article'
import styles from './styles/articles'

const Articles = (props) => {
  const {articles} = props

  return (
    <div className='articles-container cell'>
      <ul className="list grid-x grid-padding-x small-up-2 small-padding-collapse">
        {articles.map(article => (
          <li key={article._id} className="list__item cell">
            <Article {...article} />
          </li>
        ))}
      </ul>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Articles
