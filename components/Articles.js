import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
import Article from './Article'
import listStyles from './styles/list'

export default (props) => {
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
      <style jsx>{listStyles}</style>
    </div>
  )
}
