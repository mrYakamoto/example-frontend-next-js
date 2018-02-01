import React from 'react'
import style from './styles/publication'

import _get from 'lodash.get'
import { urlFor } from 'lib/sanity'

export default class Publication extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.toggleAccordion = this.toggleAccordion.bind(this)
  }

  handleClick(evt) {
    this.toggleAccordion()
  }

  toggleAccordion() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    let id = _get(this.props, '_id')
    let articles = _get(this.props, 'articles', [])

    let imgRef = _get(this.props, 'image', {})
    let imgUrl = urlFor(imgRef).url()

    let panelStyle = this.state.isOpen
      ? {maxHeight: `${this.refs.panel.scrollHeight}px`}
      : {maxHeight: '0'}

    return (
      <div className='publication'>
        <button className='accordion' onClick={this.handleClick}>
          <img className='publication-logo' src={imgUrl}/>
        </button>
        <div ref='panel' className='panel' style={panelStyle}>
          <ul className='articles'>
            {articles.map(function(article, i) {
              return (
                <li key={`${id}-${i}`}>
                  <a
                    className='article-link'
                    href={article.articleUrl}
                    target='_blank'
                  >
                    {article.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx>{style}</style>
      </div>
    )
  }
}
