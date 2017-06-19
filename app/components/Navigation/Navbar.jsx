import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import NavbarLink from './NavbarLink'
import Login from '../Authentication/Login'
import WhoAmI from '../Authentication/WhoAmI'
import { setCategory } from '../../reducers/product'


/* -----------------    COMPONENT     ------------------ */

class ImageLink extends React.Component {
  constructor(props) {
    super(props)
    this.category = this.props.category
  }

  render() {
    return (
      <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          <NavbarLink
            to="/products"
            title="Bicycles"
            logo="bicycle"
            onClick={ ()=> this.props.setCategory('')}
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
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({})

export default connect(mapProps, { setCategory })(ImageLink)

