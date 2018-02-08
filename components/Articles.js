import React from 'react'
import Link from 'next/link'

import Layout from 'layouts/Main'
import Article from 'components/Article'
import styles from './styles/articles'

import { TransitionMotion, spring } from 'react-motion'


// const Articles = (props) => {
//   const {articles} = props

//   return (
//     <div className='articles-container cell'>
//       <ul className="list grid-x grid-padding-x small-up-1 large-up-2 small-padding-collapse">
//         {articles.length &&
//           articles.map((article, i) => articleMapper(article, i))
//         }
//       </ul>
//       <style jsx>{styles}</style>
//     </div>
//   )
// }

// const articleMapper = (article, i) => {
//   const durationBetweenTrans = 200 * (i + 1)

//   return (
//     <li key={article._id} className="list__item cell">
//       <Article {...article} durationBetweenTrans={durationBetweenTrans} />
//     </li>
//   )
// }

export default class Articles extends React.Component {
  state = {
    items: this.props.articles
  }

  getStyles = (prevStyles) => {
    let opacityValue = prevStyles ? 1 : 0

    return this.props.articles.map((article, i) => ({
      key: article._id,
      style: {height: 100, width: 100, opacity: opacityValue}
    }))
  }

  render() {
    return (
      <TransitionMotion styles={this.getStyles}>
      {interpolatedStyles =>
        <div>
          {interpolatedStyles.map((config, i) => {
            let transitionValue = `opacity 500ms ease-in-out ${i * 500}ms`
            return (
              <div
                key={config.key}
                style={{
                  ...config.style,
                  backgroundColor: 'red',
                  transition: transitionValue
                }}
              >
                <h1>HELLO</h1>
              </div>
            )
          })}
        </div>
      }
      </TransitionMotion>
    )
  }
}

