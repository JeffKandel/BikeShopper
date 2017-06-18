import React from 'react'
import {Link
} from 'react-router'

import { formatPrice } from '../../utils/priceUtils'

export default ({ productId, name, price, image, description, alt }) => (
  <Link to={`/products/${productId}`}>
  <article className="fl br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center">
    <img src={image} className="db w-100 br2 br--top" alt={alt}/>
    <div className="pa2 ph3-ns pb3-ns">
    <dl className="mt2 f6 lh-copy">
      <dt className="clip">Title</dt>
      <dd className="ml0">{name}</dd>
      <dt className="clip">Artist</dt>
      <dd className="ml0 gray">{formatPrice(price)}</dd>
    </dl>
    </div>
  </article>
  </Link>
)
