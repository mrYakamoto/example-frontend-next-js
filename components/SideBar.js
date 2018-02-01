import React from 'react'
import style from './styles/sidebar'
import Publication from 'components/Publication'

export default (props) => {

  return (
    <div className='sidebar cell'>
      {props.publications.map(function(publicationContent) {
        return (
          <div className='publication-wrapper' key={publicationContent._id}>
            <Publication {...publicationContent} />
          </div>
        )
      })}
      <style jsx>{style}</style>
    </div>
  )
}
