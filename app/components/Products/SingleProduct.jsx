import React from 'react'

import FontAwesome from 'react-fontawesome'
import { formatPrice } from '../../utils/priceUtils'

import store from 'App/app/store'
import { connect } from 'react-redux'

// *------------------- COMPONENT -----------------*//

class SingleProduct extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      color: '',
      size: '',
      quantity: 0
    }
    this.setColor = this.setColor.bind(this)
    this.setSize = this.setSize.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
  }

  setColor(val) {
    this.setState({ color: val })
  }

  setSize(val) {
    this.setState({ size: val })
  }

  setQuantity(val) {
    this.setState({ quantity: val })
  }

  render() {
    const product = this.props.singleProduct
    console.log("product", product);
    const reviews = this.props.reviews

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
            <a className="fr no-underline near-white bg-animate bg-mid-gray hover-bg-black inline-flex items-center ma2 tc br2 pa2" href="https://facebook.com" title="Facebook">
              <FontAwesome name='shopping-cart'/>
              <span className="f6 ml2 pr2">
                Add to Cart
              </span>
            </a>
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

// <div>
//   <div className = "col-md-6">
//     <div className="carousel carousel-slider">
//       <a className="carousel-item" href="#one!">
//         {
//           product.images && product.images.map(image => (
//             <img src={ image }  />
//           ))
//         }
//       </a>
//     </div>
//   </div>


