import React from 'react'
import { Link } from 'react-router'

import { formatPrice } from '../../utils/priceUtils'

export default ({ productId, name, price, image, description, alt }) => (
  <Link to={`/products/${productId}`}>
    <article className="fl w-100 w-50-m  w-third-ns pa2-ns">
      <div className="aspect-ratio aspect-ratio--8x5">
        <img style={{backgroundImage: `url(${image})`, WebkitFilter: 'grayscale(100%)'}}
        className="db bg-center cover aspect-ratio--object" />
      </div>
      <div href="#0" className="ph2 ph0-ns pb3 link db">
        <h3 className="f5 f4-ns mb0 black-90">{name}</h3>
        <h3 className="f6 f5 fw4 mt2 black-60">{formatPrice(price)}</h3>
      </div>
    </article>
  </Link>
)
