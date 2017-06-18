import React from 'react'
import { Link } from 'react-router'

export default () => (
  <div className="h-100 w-100">
    <Link to='/products' className="flex  aspect-ratio aspect-ratio--1x1 dim  h-100 justify-center items-center">
      <span
        role="img"
        aria-label="Beyoncé"
        style={{backgroundImage: `url(http://via.placeholder.com/700)`}}
        className="bg-center cover aspect-ratio--object">
      </span>
    </Link>
  </div>
)
