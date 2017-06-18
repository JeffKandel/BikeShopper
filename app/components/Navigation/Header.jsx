import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import SiteName from './SiteName'
import Navbar from './Navbar'

/* -----------------    COMPONENT     ------------------ */

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="w-100 fixed pa3 ph5-ns top-0 bg-white">
        <div className="db dt-ns mw9 center w-100">
        <SiteName />
        <Navbar user={this.props.user}/>
        </div>
      </header>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ auth }) => ({ user: auth })

const mapDispatch = null

export default connect(mapProps, mapDispatch)(Header)
