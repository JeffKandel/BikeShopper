import React from 'react'
import { Link } from 'react-router'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

export class AllProducts extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="">
          {
            this.props.products && this.props.products.map(product => (
              <ProductItem
                key={product.id}
                productId={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                description={`${product.description.slice(0,100).trim()}...`}
                alt={product.name}
              />
            ))
          }
    </div>
    )
  }
}

export default connect(
  state => ({ products: state.product.products }),
  {}
)(AllProducts)
