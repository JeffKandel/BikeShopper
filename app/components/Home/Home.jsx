import React from 'react'
import { connect } from 'react-redux'

import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'

import TopRow from './TopRow'
import MiddleRow from './MiddleRow'
import BottomRow from './BottomRow'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.categories = this.fischerYatesCategories()
  }

  fischerYatesCategories() {
    // shuffle the categories array in place in O(n) time
    let categories = ['Road', 'Mountain', 'Town']
    let i = 0
      , j = 0
      , temp = null

    for (i = categories.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = categories[i]
      categories[i] = categories[j]
      categories[j] = temp
    }

    return categories
  }

  render() {
    return (
      <article className="cf">
      <TopRow category={this.categories[0]} />
      <MiddleRow category={this.categories[1]} />
      <BottomRow category={this.categories[2]}/>
    </article>
    )
  }
}
