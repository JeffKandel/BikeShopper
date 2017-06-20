import React from 'react'
import FontAwesome from 'react-fontawesome'

import { formatPrice } from '../../utils/priceUtils'

export default ({ elementType, value }) => {
  switch(elementType) {
      case 'td':
          return <td className="pv3 pr3 tc bb b--black-20">{value}</td>
          break
      case 'th':
          return <th className="fw6 tc bb b--black-20 tl pb3 pr3 bg-white">{value}</th>
          break

  }
}
