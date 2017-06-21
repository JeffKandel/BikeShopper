import React from 'react'
import { Link } from 'react-router'

import SingleProductButton from './SingleProductButton'

import { formatPrice } from '../../utils/priceUtils'

import store from 'App/app/store'
import { connect } from 'react-redux'

import { addItemToOrder, deleteItemFromDatabase } from '../../reducers/order'

// *------------------- COMPONENT -----------------*//

class SingleProduct extends React.Component {

  constructor(props) {
    super(props)
    this.addItemToOrder = this.props.addItemToOrder.bind(this)
    this.deleteItemFromDatabase = this.props.deleteItemFromDatabase.bind(this)
  }

  render() {
    const item = {
      price: this.props.product.price,
      order_id: this.props.selectedOrder.id,
      product_id: this.props.product.id
    }

    const orderItems = this.props.selectedOrder.items,
          product = this.props.product

    return (
      <article className="flex flex-column flex-row-ns cf ph3 ph5-ns pv5">
        <header className="fn order-1 order-0-ns fl-ns w-third-ns pr4-ns">
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            {product.name}
          </h1>
          <h2 className="f5 mid-gray lh-title">
            {product.description}
          </h2>
          <div className="flex flex-column flex-row-l items-center justify-between col-md-6">
            <price className="f6 ttu tracked overflow-scroll gray">
              {formatPrice(product.price)}
            </price>
            {(orderItems &&
              orderItems.filter(i => i.product_id === product.id).length)
              ?<SingleProductButton
              iconName='remove'
              handleClick={this.deleteItemFromDatabase.bind(this, item.product_id)}
              text='Remove'
              />
              :<SingleProductButton
              iconName='shopping-cart'
              handleClick={this.addItemToOrder.bind(this, item)}
              text='Add to Cart'
              />
            }

          </div>
        </header>
        <div className="fl w-two-thirds-ns pa2">
          { product.image &&
            <img
              src={`/images/Products/${product.image}`}
              alt={product.name}
            />
          }
        </div>
      </article>
    )
  }
}

/* ------------------- CONTAINER ----------------- */

export default connect(
  state => ({ selectedOrder: state.order.currentOrder, product: state.product.selectedProduct }), { addItemToOrder, deleteItemFromDatabase })(SingleProduct)
