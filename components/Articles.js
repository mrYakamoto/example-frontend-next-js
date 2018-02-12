import React from 'react'
import _get from 'lodash.get'

import Layout from 'layouts/Main'
import Article from 'components/Article'
import styles from './styles/articles'

const delay = 100

const defaultStyle = (index) => ({
  transition: `opacity 300ms ease-in ${delay * (index + 1)}ms`
})

const transitionStyles = {
  'enter': {opacity: 0},
  'entering': {opacity: 1}
}

export default class Articles extends React.Component {
  state = {
    transitionIn: 'enter'
  }

  componentDidMount() {
    this.setState({
      transitionIn: 'entering'
    })
  }

  render() {
    let articles = _get(this.props, 'articles', [])
    articles = articles.map((article, i) => (
      <div className='list__item cell' key={article._id} style={{...transitionStyles[this.state.transitionIn], ...defaultStyle(i)}}>
        <Article {...article} />
      </div>
    ))
 
    return (
      <div className='articles-container cell'>
        <div className='list'>
          <div className='grid-x grid-padding-x small-up-1 large-up-2 small-padding-collapse'>
            {articles}
          </div>
        </div>
        <style jsx global>{styles}</style>
      </div>
    )
  }
}
