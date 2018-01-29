import React from 'react'
// import style from './styles/'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

export default (props) => {
  const id = _get(props, '_id')
  const name = _get(props, 'name')
  const publicationUrl = _get(props, 'publicationUrl')

  const imgRef = _get(props, 'logo')
  const imgUrl = urlFor(imgRef).url()

  return (
    <div className='publication'>
      <a href={publicationUrl} target='_blank'>
        <img src={imgUrl}/>
      </a>
    </div>
  )
}
