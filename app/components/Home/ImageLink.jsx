import React from 'react'
import { Link } from 'react-router'

export default () => (

    <a href="#" style={{backgroundImage: `url(http://via.placeholder.com/700)`}}

      className="flex link aspect-ratio aspect-ratio--1x1 hide-child cover bg-center">
      <span className="white dtc v-mid aspect-ratio--object child bg-black-40">
        Card title
      </span>
    </a>
)

// <Link to='/products' className="flex  aspect-ratio aspect-ratio--1x1 dim  h-100 justify-center items-center">
//       <span
//         role="img"
//         aria-label="Beyoncé"
//         style={{backgroundImage: `url(http://via.placeholder.com/700)`}}
//         className="bg-center cover aspect-ratio--object">
//       </span>
//     </Link>
