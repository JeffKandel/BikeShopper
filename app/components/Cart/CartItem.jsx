import React from 'react'
import FontAwesome from 'react-fontawesome'

import { formatPrice } from '../../utils/priceUtils'

import TableElement from './TableElement'

export default ({ item, handleRemove }) => (
  <tr>
    <td className="pv3 pr3 tc bb b--black-20">
      <img
        src={`/images/Products/${item.product.image}`}
        className="pa1 ba b--black-10 h3"
        alt={`${item.product.name} avatar`}
      />
    </td>
    <TableElement elementType='td' value={item.product.name}/>
    <TableElement elementType='td' value={formatPrice(item.price)}/>
    <td className="f4 pv3 pr3 bb w-10 tc black-70 b--black-20">
      <FontAwesome
        name='remove'
        className='pointer'
        onClick={() => handleRemove(item.id)}
      />
    </td>
  </tr>
)
