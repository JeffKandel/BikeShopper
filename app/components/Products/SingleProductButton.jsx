import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

import { formatPrice } from '../../utils/priceUtils'

export default ({ handleClick, text, iconName }) => (
  <div
    className={`fr div pointer no-underline near-white bg-animate bg-mid-gray hover-bg-black inline-flex items-center ma2 tc br2 pa2`}
    onClick={() => handleClick()}
  >
    <FontAwesome name={iconName}/>
    <span className="f6 ml2 pr2">
      {text}
    </span>
  </div>
)
