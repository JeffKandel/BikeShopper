import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import Login from '../Authentication/Login'
import WhoAmI from '../Authentication/WhoAmI'
import NavbarLink from './NavbarLink'
import SiteName from './SiteName'

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
        <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
            <NavbarLink
              to="/products"
              title="Bicycles"
              logo="bicycle"
            />
            <NavbarLink
              to="/cart"
              title="Cart"
              logo="shopping-cart"
            />
            {this.props.user ?
            <WhoAmI/> :
            <NavbarLink
              to="/authenticate"
              title="Login / Sign Up"
              logo="sign-in"
            />
            }
        </nav>
        </div>
      </header>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ auth }) => ({ user: auth })

const mapDispatch = null

export default connect(mapProps, mapDispatch)(Header)
