import React from 'react'
import Navbar from './Navigation/Navbar'

const Root = ({ children }) => (
  <div>
    <Navbar />
    <div className="bg-blue mt5 pt3">
      { children }
    </div>
  </div>

)

export default Root
