import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NavbarLink from './NavbarLink'
import TachyonsLink from './TachyonsLink'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="w-100 pa3 ph5-ns bg-white">
        <div className="db dt-ns mw9 center w-100">
        <div className="db dtc-ns v-mid tl w-50">
          <Link to="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70">
            Bike Shopper&nbsp;
          </Link>
          <div className="dib">
            <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">
               styled with <TachyonsLink />
            </small>
          </div>
        </div>
        <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
            <NavbarLink to="/products" title="Bicycles" logo="bicycle"/>
            <NavbarLink to="/cart" title="Cart" logo="shopping-cart"/>
            {this.props.user
              ? <WhoAmI/>
              : <NavbarLink to="/authenticate" title="Login / Sign Up" logo="sign-in"/>
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

export default connect(mapProps, mapDispatch)(Navbar)
