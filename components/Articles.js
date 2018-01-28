import React from 'react'
import Link from 'next/link'

import Layout from 'templates/Layout'
import Article from 'components/Article'
import styles from './styles/articles'

const Articles = (props) => {
  const {articles} = props

  return (
    <div className='cell'>
      <ul className="list grid-x grid-padding-x small-up-2 medium-up-3">
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
