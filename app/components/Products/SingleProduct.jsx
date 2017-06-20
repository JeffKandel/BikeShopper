import React from 'react'

import FontAwesome from 'react-fontawesome'
import { formatPrice } from '../../utils/priceUtils'

import store from 'App/app/store'
import { connect } from 'react-redux'

import { addItemToOrder } from '../../reducers/order'

// *------------------- COMPONENT -----------------*//

class SingleProduct extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const item = {
      price: this.props.product.price,
      order_id: this.props.selectedOrder.id,
      product_id: this.props.product.id
    }

    return (
      <article className="flex cf ph3 ph5-ns pv5">
        <header className=" fn fl-ns w-third-ns pr4-ns">
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            {this.props.product.name}
          </h1>
          <h2 className="f5 mid-gray lh-title">
            {this.props.product.description}
          </h2>
          <div className="flex items-center justify-between col-md-6">
            <price className="f6 ttu tracked overflow-scroll gray">
              {formatPrice(this.props.product.price)}
            </price>
            <div
              href='#'
              className="fr pointer no-underline near-white bg-animate bg-mid-gray hover-bg-black inline-flex items-center ma2 tc br2 pa2"
              onClick={() => this.props.addItemToOrder(item)}
            >
              <FontAwesome name='shopping-cart'/>
              <span className="f6 ml2 pr2">
                Add to Cart
              </span>
            </div>
          </div>
        </header>
        <div className="fl w-two-thirds-ns pa2">
            { this.props.product.image &&
              <img
                src={`/images/Products/${this.props.product.image}`}
                alt={this.props.product.name}
              />}
        </div>
      </article>
    )
  }
}

/* ------------------- CONTAINER ----------------- */

export default connect(
  state => ({ selectedOrder: state.order.currentOrder, product: state.product.selectedProduct }), { addItemToOrder })(SingleProduct)
