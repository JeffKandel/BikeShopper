import React from 'react'

export default ({ id, href, name, delay }) => (
  <a
    className="black-70 no-underline"
    href={href}
    target="_blank"
  >
    {name}
  </a>
)
