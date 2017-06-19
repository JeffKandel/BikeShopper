import React from 'react'

import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'

export default ({ category, imageIds }) => (
  <div>
    <div className="fl w-50">
    <ImageLink image={`/images/${category}/${imageIds[0]}.jpg`}/>
    </div>
    <div className="fl w-50 w-25-ns">
      <CategoryLink category={category}/>
    </div>
    <div className="fl w-100 w-25-ns">
      <ImageLink image={`/images/${category}/${imageIds[2]}.jpg`}/>
    </div>
    <div className="fl w-50 w-25-ns">
    <ImageLink image={`/images/${category}/${imageIds[1]}.jpg`}/>
    </div>
    <div className="fl w-50 w-25-ns">
      <ImageLink image={`/images/${category}/${imageIds[3]}.jpg`}/>
    </div>
  </div>
)
