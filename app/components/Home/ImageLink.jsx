import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setCategory } from '../../reducers/product'

/* -----------------    COMPONENT     ------------------ */

class ImageLink extends React.Component {
  constructor(props) {
    super(props)
    this.category = this.props.category
  }

  render() {
    return (
      <Link
        to='/products'
        className="db aspect-ratio aspect-ratio--1x1 dim h-100"
        onClick={ ()=> this.props.setCategory(this.category)}
      >
        <span
          role="img"
          aria-label="Products"
          style={{backgroundImage: `url(${this.props.image})`}}
          className="bg-center cover aspect-ratio--object">
        </span>
      </Link>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({})

export default connect(mapProps, { setCategory })(ImageLink)
