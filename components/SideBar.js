import React from 'react'
import style from './styles/sidebar'

export default (props) => {
  return (
    <div className='sidebar cell'>
      <h1>SIDEBAR</h1>
      {props.publications.map(function(publication) {
        return <h2 key={publication._id}>{publication.name}</h2>
      })}
      <style jsx>{style}</style>
    </div>
  )
}
