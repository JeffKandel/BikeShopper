import React from 'react'
import Header from './Navigation/Header'

const Root = ({ children }) => (
  <div className='flex cf'>
    <Header className=""/>
    <main className="bg-blue mt5 pt4 pt3-m pt1-l">
      { children }
    </main>
  </div>

)

export default Root
