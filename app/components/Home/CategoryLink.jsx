import React from 'react'
import { Link } from 'react-router'

export default ({category}) => (
  <Link to='/products' className="flex align-center aspect-ratio aspect-ratio--1x1 dim h-100">
    <span
      role="img"
      aria-label={category}
      className="bg-center bg-black cover aspect-ratio--object">
        Text
    </span>
  </Link>
)
