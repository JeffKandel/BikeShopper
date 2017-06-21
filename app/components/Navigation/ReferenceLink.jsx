import React from 'react'

export default ({href,name,animation}) => (
  <a
    className="black-70 no-underline"
    href={href}
    style={animation}
    target="_blank"
  >
    {name}
  </a>
)

