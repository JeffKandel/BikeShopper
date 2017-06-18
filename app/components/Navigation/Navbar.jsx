import React from 'react'

import NavbarLink from './NavbarLink'
import Login from '../Authentication/Login'
import WhoAmI from '../Authentication/WhoAmI'

export default ({user})=>(
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
      {user ?
      <WhoAmI/> :
      <NavbarLink
        to="/authenticate"
        title="Login / Sign Up"
        logo="sign-in"
      />
      }
  </nav>
)
