import React from 'react'
import Link from 'next/link'
import style from './styles/article'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

class Article extends React.Component{

  render() {
    const title = _get(this.props, 'title')
    const articleUrl = _get(this.props, 'articleUrl')
    const publicationName = _get(this.props, 'publication.name')
    const imgRef = _get(this.props, 'image')

    const imgUrl = urlFor(imgRef).height(248).width(434).fit('crop')

    return (
      <div>
        <div
          className='article-card'
        >
          <a className='article-link' href={articleUrl} target='_blank'>
            <img className='image' src={imgUrl} alt='lorem' />
            <div className='overlay'>
              {title &&
                <h3 className='article-title'>{title}</h3>
              }
              {publicationName &&
                <p className='publication-name'>{publicationName}</p>
              }
            </div>
          </a>
        </div>
        <style jsx>{style}</style>
      </div>
    )
  }
}

export default Article
