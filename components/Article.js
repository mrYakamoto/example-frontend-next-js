import React from 'react'
import Link from 'next/link'
import style from './styles/article'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

const Article = (props) => {
  const title = _get(props, 'title')
  const articleUrl = _get(props, '')
  const imgRef = _get(props, 'image')

  const imgUrl = urlFor(imgRef).height(248).width(434).crop('center').fit('crop')
  return (
    <div className='article-card'>
      <img src={imgUrl} alt='lorem' />
      <a className='overlay'>
        {title && <h3>{title}</h3>}
      </a>
      <style jsx>{style}</style>
    </div>
  )
}

export default Article
