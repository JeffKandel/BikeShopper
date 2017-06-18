import React from 'react'
import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'

export default ({category}) => (
  <div>
    <div className="fl w-100 w-50-m w-25-ns">
      <ImageLink image={`/images/${category}/2.jpg`}/>
      <ImageLink image={`/images/${category}/2.jpg`}/>


    </div>
    <div className="fl w-100 w-50-m w-25-l">
      <div className="fl w-100">
        <div className="fl w-50">
         <ImageLink image={`/images/${category}/2.jpg`}/>
        </div>
        <div className="fl w-50">
          <ImageLink image={`/images/${category}/2.jpg`}/>
        </div>
        <div className="fl w-50">
          <ImageLink image={`/images/${category}/2.jpg`}/>
        </div>
        <div className="fl w-50">
          <ImageLink image={`/images/${category}/2.jpg`}/>

        </div>
      </div>
      <div className="fl w-100">
        <CategoryLink />
      </div>
    </div>
    <div className="fl w-100 w-50-l">
      <ImageLink image={`/images/${category}/2.jpg`}/>
    </div>
  </div>
)

