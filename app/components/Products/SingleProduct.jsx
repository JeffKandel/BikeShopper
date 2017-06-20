import React from 'react'

import FontAwesome from 'react-fontawesome'
import { formatPrice } from '../../utils/priceUtils'

import store from 'App/app/store'
import { connect } from 'react-redux'

// *------------------- COMPONENT -----------------*//

class SingleProduct extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const product = this.props.singleProduct

    return (
      <article className="flex cf ph3 ph5-ns pv5">
        <header className=" fn fl-ns w-third-ns pr4-ns">
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            {product.name}
          </h1>
          <h2 className="f5 mid-gray lh-title">
            {product.description}
          </h2>
          <div className="flex items-center justify-between col-md-6">
            <price className="f6 ttu tracked overflow-scroll gray">
              {formatPrice(product.price)}
            </price>
            <div
              className="fr no-underline near-white bg-animate bg-mid-gray hover-bg-black inline-flex items-center ma2 tc br2 pa2"
            >
              <FontAwesome name='shopping-cart'/>
              <span className="f6 ml2 pr2">
                Add to Cart
              </span>
            </div>
          </div>
        </header>
        <div className="fl w-two-thirds-ns pa2">
            { product.images &&
              <img
                src={product.images[0]}
                alt={product.name}
              />}
        </div>
      </article>
    )
  }
}

/* ------------------- CONTAINER ----------------- */


export default connect(
  state => ({ singleProduct: state.product.selectedProduct }), {}
)(SingleProduct)
