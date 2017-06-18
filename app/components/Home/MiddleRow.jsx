import React from 'react'

import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'

export default ({category}) => (
  <div>
    <div className="fl w-50">
      <ImageLink image={`/images/${category}/2.jpg`}/>
    </div>
    <div className="fl w-50 w-25-ns">
      <ImageLink image={`/images/${category}/2.jpg`}/>
    </div>
    <div className="fl w-100 w-25-ns">
      <ImageLink image={`/images/${category}/2.jpg`}/>
    </div>
    <div className="fl w-50 w-25-ns">
      <CategoryLink />
    </div>
    <div className="fl w-50 w-25-ns">
      <ImageLink image={`/images/${category}/2.jpg`}/>
    </div>
  </div>
)

