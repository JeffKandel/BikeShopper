import React from 'react'
import { Link } from 'react-router'

export default ({category}) => (
  <Link to='/products' className="flex aspect-ratio aspect-ratio--1x1 dim h-100">
    <span
      role="category"
      aria-label={category}
      className="flex justify-center items-center bg-center bg-black cover aspect-ratio--object">
        {category}
    </span>
  </Link>
)
