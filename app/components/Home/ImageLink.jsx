import React from 'react'
import { Link } from 'react-router'

export default ({image}) => (
  <Link to='/products' className="db aspect-ratio aspect-ratio--1x1 dim h-100">
    <span
      role="img"
      aria-label="Products"
      style={{backgroundImage: `url(${image})`}}
      className="bg-center cover aspect-ratio--object">
    </span>
  </Link>
)
