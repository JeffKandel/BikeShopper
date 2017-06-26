import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default ({ to, title, logo, onClick }) => (
  <Link
    className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib"
    to={to}
    title={title}
    onClick={onClick}
  >
    {logo && <FontAwesome name={logo} />}
    &nbsp;{title}
  </Link>
)
