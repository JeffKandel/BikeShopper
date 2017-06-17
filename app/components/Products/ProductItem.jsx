import React from 'react'

export default ({ name, price, image, description, alt }) => (
  <article className="fl br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src={image} className="db w-100 br2 br--top" alt={alt} />
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="f5 f4-ns mv0">{name}</h1>
        </div>
        <div className="dtc tr">
          <h2 className="f5 mv0">{price}</h2>
        </div>
      </div>
      <p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
    </div>
  </article>
)
