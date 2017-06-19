import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setCategory } from '../../reducers/product'

/* -----------------    COMPONENT     ------------------ */

class CategoryLink extends React.Component {
  constructor(props) {
    super(props)
    this.category = this.props.category
  }

  render() {
    return (
      <Link to='/products' className="flex aspect-ratio aspect-ratio--1x1 dim h-100" onClick={()=>this.props.setCategory(this.category)}>
        <span
          role="category"
          aria-label={this.category}
          className="flex f3 link hover-pink white-70 justify-center items-center bg-black aspect-ratio--object">
            {this.category}
        </span>
      </Link>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({})

export default connect(mapProps, { setCategory })(CategoryLink)
