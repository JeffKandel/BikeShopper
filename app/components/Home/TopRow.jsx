import React from 'react'
import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'


export default () => (
    <div className="fl w-50 w-25-ns">
      <ImageLink image="/images/Road/BeachFront.jpg"/>
    </div>
    <div className="fl w-50 w-25-ns">
      <ImageLink image="/images/Road/Cave.jpg"/>
    </div>
    <div className="fl w-50 w-25-ns">
      <CategoryLink />
    </div>
    <div className="fl w-50 w-25-ns">
      <ImageLink image="/images/Road/Beach.jpg"/>
    </div>
)
