import React from 'react'
import Link from 'next/link'

import styles from './styles/footer'

const Footer = (props) => {
  return (
    <footer className='grid-container fluid'>
      <p>© Jason O. Gilbert</p>
      <style jsx>{styles}</style>
    </footer>
  )
}

export default Footer
