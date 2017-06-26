import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default () => (
  <article className="cf ph3 ph5-ns pv5">
       <header className="fn fl-ns tr w-50-ns pr4-ns">
         <h1 className="mb3 mt0 lh-title">Designing Bike Shopper</h1>
         <time>
           <a className="f6 ttu tracked gray link no-underline" href='http://www.github.com/JeffKandel'>
              <FontAwesome name='github'/>Jeff Kandel
           </a>
         </time>
       </header>
       <div className="fn fl-ns w-50-ns">
         <p className="lh-copy measure mt4 mt0-ns">
          Bike Shopper was not always this pretty.  When it was first built, part of a school project utilizing React for the first time, style was secondary.  The emphasis at the time was on component architecture and building features specified by the assignment.  Much of it worked and some of it looked passable, but nothing stood out and I was not happy with the product.  After a month or so away from the code, I decided to come back and redesign the whole site.
         </p>
         <p className="lh-copy measure">
            Paragraph about Tachyons and React:
              - mature inline styles
                - Applying atomic classes was a solid refresher of CSS fundamentals
              - styling with tachyons for mobile first ended up leading to a very clear and minimal web design overall.
              - embeding atomic CSS into React made it super easy to maintain style
              - When did scaling disappear as a concern?  I didn't even notice.
            Would I do it again:
              - Yes, I'll be working on my personal site next and plan to use Tachyons.  If I were working on a larger project, I might also build a style guide to help other developers, but I would do this for any group project I was maintaining.
         </p>
         <p className="lh-copy measure">
           Links and things:
            - code at github
            - Jeff github
            - Jeff Tech talk

         </p>
       </div>
     </article>
)
