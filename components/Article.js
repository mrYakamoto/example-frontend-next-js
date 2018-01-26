import React from 'react'
import Link from 'next/link'
import style from './styles/article'

export default (props) => {

  return (
    <div>
      <Link href={{pathname: '/article', query: {id: props._id}}}>
        <a>
          <h3>{props.title}</h3>
        </a>
      </Link>
      <style jsx>{style}</style>
    </div>
  )
}
