import React from 'react'
import { Link } from 'react-router'

import TachyonsLink from './TachyonsLink'


export default () => (
  <div className="db dtc-ns v-mid tl w-50">
    <Link to="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70">
      Bike Shopper&nbsp;
    </Link>
    <div className="dib">
      <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">
         styled with <TachyonsLink />
      </small>
    </div>
  </div>
)
