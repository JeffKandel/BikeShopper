import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default (props) => (
  <Link
    className="f6 fw6 hover-blue hide-child link black-70 mr2 mr3-m mr4-l dib"
    to={props.to}
    onClick={props.onClick}
    title={props.title}
    id={props.title}
  >
    {props.logo && <FontAwesome name={props.logo} />}
    &nbsp;{props.title}
    <div id={props.title} className="child absolute z-1 ">
      <p>Hello World!</p>
    </div>
  </Link>
)
