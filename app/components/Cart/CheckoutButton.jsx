import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default () => (
  <Link
  to='/About'
  className="fr pointer no-underline near-white bg-animate bg-mid-gray hover-bg-black inline-flex items-center ma2 tc br2 pa2"
>
  <span className="f6 ml2 pr2">
    Checkout
  </span>
</Link>
)
