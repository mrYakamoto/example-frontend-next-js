import React from 'react'
import Link from 'next/link'

import styles from './styles/header'

const Header = (props) => {
  return (
    <header>
      <div className='grid-container grid-x'>
        <Link href='/'><a className='cell small-3'>Lorem O. Ipsum</a></Link>
        <nav className='cell small-9'>
          <Link href="/articles"><a className='nav-item'>About Me</a></Link>
          <Link href="/articles"><a className='nav-item'>Lorem</a></Link>
          <Link href="/articles"><a className='nav-item'>Ipsum</a></Link>
          <Link href="/articles"><a className='nav-item'>Dolorem</a></Link>
        </nav>
      </div>
      <div className='grid-container fluid'>
        <div className='divider' />
      </div>
      <style jsx>{styles}</style>
    </header>
  )
}

export default Header
