import React from 'react'
import Link from 'next/link'
import style from './styles/article'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

const Article = (props) => {
  const title = _get(props, 'title')
  const articleUrl = _get(props, 'articleUrl')
  const imgRef = _get(props, 'image')

  const imgUrl = urlFor(imgRef).height(248).width(434).fit('crop')
  return (
    <div className='article-card'>
      <a className='article-link' href={articleUrl} target='_blank'>
        <img className='image' src={imgUrl} alt='lorem' />
        <div className='overlay'>
          {title && <h3>{title}</h3>}
        </div>
      </a>
      <style jsx>{style}</style>
    </div>
  )
}

export default Article
