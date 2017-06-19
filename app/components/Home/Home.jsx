import React from 'react'
import { connect } from 'react-redux'

import { fischerYatesShuffle } from '../../utils/arrayUtils'

import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'

import TopRow from './TopRow'
import MiddleRow from './MiddleRow'
import BottomRow from './BottomRow'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.categories = fischerYatesShuffle(['Road', 'Mountain', 'Town'])
    this.imageIds = [1, 2, 3, 4, 5, 6, 7]
  }

  render() {
    return (
      <article className="cf">
      <TopRow
        category={this.categories[0]}
        imageIds={fischerYatesShuffle(this.imageIds)}
      />
      <MiddleRow
        category={this.categories[1]}
        imageIds={fischerYatesShuffle(this.imageIds)}
      />
      <BottomRow
        category={this.categories[2]}
        imageIds={fischerYatesShuffle(this.imageIds)}
      />
    </article>
    )
  }
}
