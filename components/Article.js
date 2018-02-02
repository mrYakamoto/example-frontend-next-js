import React from 'react'
import Link from 'next/link'
import Transition from 'react-transition-group/Transition'
import style from './styles/article'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

const defaultStyle = {
  transition: 'top 300ms ease-in-out',
  position: 'relative'
}

const transitionStyles = {
  entering: { top: '-100%' },
  entered:  { top: 0 },
}

class Article extends React.Component{
  state = {
    animateIn: false
  }

  componentDidMount() {
    this.setState({
      animateIn: true
    })
  }

  render() {
    const title = _get(this.props, 'title')
    const articleUrl = _get(this.props, 'articleUrl')
    const imgRef = _get(this.props, 'image')

    const imgUrl = urlFor(imgRef).height(248).width(434).fit('crop')

    const durationBetweenTrans = this.props.durationBetweenTrans

    return (
      <div>
        <Transition in={this.state.animateIn} timeout={durationBetweenTrans}>
          {(state) => (
            <div
              className='article-card'
            >
              <a className='article-link' href={articleUrl} target='_blank'>
                <img className='image' src={imgUrl} alt='lorem'
                style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}/>
                <div className='overlay'>
                  {title && <h3>{title}</h3>}
                </div>
              </a>
            </div>
          )}
        </Transition>
        <style jsx>{style}</style>
      </div>
    )
  }
}

export default Article
