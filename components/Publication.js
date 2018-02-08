import React from 'react'
import style from './styles/publication'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

const Publication = (props) => {
  let id = _get(props, '_id')
  let articles = _get(props, 'articles', [])

  let imgRef = _get(props, 'image', {})
  let imgUrl = urlFor(imgRef).url()

  return (
    <div className='publication'>
      <button className='accordion'>
        <img className='publication-logo' src={imgUrl}/>
      </button>
      <div className='panel'>
        <ul className='articles'>
          {articles.map(function(article, i) {
            return (
              <li className='article' key={`${id}-${i}`}>
                <a
                  className='article-link'
                  href={article.articleUrl}
                  target='_blank'
                >
                  <h5 className='article-title'>
                    {article.title}
                  </h5>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default Publication
