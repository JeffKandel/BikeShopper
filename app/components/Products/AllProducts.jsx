import React from 'react'
import { Link } from 'react-router'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

import ProductItem from './ProductItem'
import ProductCategory from './ProductCategory'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="cf w-100 pa2-ns">
          <header className="tc pv3 pv4-ns">
            <div className="flex flex-row justify-center">
              <ProductCategory category='Road' />
              <ProductCategory category='Mountain' />
              <ProductCategory category='Town' />
            </div>
          </header>
          {
            this.props.products
            &&
            this.props.products
            .filter(product => (
              this.props.selectedCategory === '' ||
              product.category === this.props.selectedCategory
            ))
            .map(product => (
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
    </section>
    )
  }
}

export default connect(
  ({ product }) => ({ selectedCategory: product.selectedCategory, products: product.products }), {}
)(AllProducts)
