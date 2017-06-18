import React from 'react'
import Header from './Navigation/Header'

const Root = ({ children }) => (
  <div className='flex flex-column'>
    <Header />
    <main className="w-100">
      { children }
    </main>
  </div>

)

export default Root
