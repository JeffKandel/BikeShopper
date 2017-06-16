import React from 'react'
import NavbarLink from '../Navigation/NavbarLink'
export const WhoAmI = ({ user, logout }) => (
    <NavbarLink to="/" title="Logout" onClick={logout}/>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
