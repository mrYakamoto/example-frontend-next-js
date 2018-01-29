import React from 'react'
import Link from 'next/link'
import sanity from '../lib/sanity'

import Layout from 'layouts/Main'

const query = `*[_type == "person"] {
  _id,
  name,
  "imageUrl": image.asset->url
}[0...50]
`

export default class People extends React.Component {
  static async getInitialProps() {
    return {
      people: await sanity.fetch(query)
    }
  }

  render() {
    const {people} = this.props
    return (
      <Layout>
        <ul className="list">
          {people.map(person => (
            <li key={person._id} className="list__item">
              <Link href={{pathname: '/person', query: {id: person._id}}}>
                <a>
                  {person.imageUrl && <img src={`${person.imageUrl}?h=240`} />}
                  <h3>{person.name}</h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}
