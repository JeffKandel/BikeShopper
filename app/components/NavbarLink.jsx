import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <Link
    className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib"
    to={props.to}
    onClick={props.onClick}
    title={props.title}>{props.title}
  </Link>
)
