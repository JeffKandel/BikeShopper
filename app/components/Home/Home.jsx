import React from 'react'
import { Link } from 'react-router'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import ProductItem from '../Products/ProductItem'

export class Home extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>

    </div>
    )
  }
}

export default connect(
  state => ({ products: state.product.products }),
  {}
)(Home)
