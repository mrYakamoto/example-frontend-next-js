import React from 'react'
import Link from 'next/link'

import styles from './styles/header'
import FacebookIcon from '../static/images/facebook-logo.svg'
import TwitterIcon from '../static/images/twitter-logo.svg'
import LinkedInIcon from '../static/images/linkedin-sign.svg'

const Header = (props) => {
  let iconStyle = {
    height: '100%',
    width: '100%'
  }

  return (
    <header className='grid-container fluid grid-x'>
      <Link href='/'>
        <a className='page-title-container cell small-3'>
          <h3 className='page-title'>Jason O. Gilbert</h3>
        </a>
      </Link>
      <nav className='nav-container cell small-9'>
        <Link href="/articles"><a className='nav-item'>About Me</a></Link>
        <a className='twitter-link nav-item social-link' href=''>
          <div className='icon-wrapper'>
            <TwitterIcon />
          </div>
        </a>
        <a className='linkedIn-link nav-item social-link' href=''>
          <div className='icon-wrapper'>
            <LinkedInIcon />
          </div>
        </a>
        <a className='facebook-link nav-item social-link' href=''>
          <div className='icon-wrapper'>
            <FacebookIcon />
          </div>
        </a>
      </nav>
      <style jsx>{styles}</style>
    </header>
  )
}

export default Header
