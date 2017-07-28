import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default () => (
<article className="cf ph3 ph5-ns pv5">
  <header className="fn fl-ns tr w-50-ns pr4-ns">
    <h1 className="mb3 mt0 lh-title">Designing Bike Shopper</h1>
    <time>
      <a className="f6 ttu tracked gray link no-underline" target="_blank" href='http://www.github.com/JeffKandel'>
      <FontAwesome name='github'/> Jeff Kandel //
      </a><br/>
      <a className="f6 ttu tracked gray link no-underline" target="_blank" href='http://www.github.com/JeffKandel/BikeShopper'>
      <FontAwesome name='github'/> Bike Shopper //
      </a><br/>
      <a className="f6 ttu tracked gray link no-underline" target="_blank" href='https://www.youtube.com/watch?v=SVLUh0rn6_4'>
      <FontAwesome name='youtube'/> Functional CSS //
      </a><br/>
    </time>
  </header>
  <div className="fn fl-ns w-50-ns">
    <p className="lh-copy measure mt4 mt0-ns">
    Bike Shopper is not a store and was never intended to be one.  It is a design project with some meat on its bones.  After reading a lot about functional CSS, I was looking for a larger sandbox to explore functional CSS alongside React.  I decided to strip the CSS from an old  project and start from scratch with the Tachyons functional CSS library.  The site you see is a result of this experimentation.
    </p>
    <p className="lh-copy measure">
    After working with Tachyons and React, I feel really positive about the combination. Functional CSS feels close to the styling metal and the practice of writing out each class reinforced CSS fundamentals along the way. Embedding these styles in React components ensured that maintanence and consistency were non-issues. Tachyons is definitely a tool I will use again.
    </p>
  </div>
</article>
)
