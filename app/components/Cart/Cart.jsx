import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import Login from '../Authentication/Login'
import WhoAmI from '../Authentication/WhoAmI'
import CartItem from './CartItem'
import { deleteItemFromDatabase } from '../../reducers/order'
import TableElement from './TableElement'
/* -----------------    COMPONENT     ------------------ */

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.makeCartItem = this.makeCartItem.bind(this)
  }

  calculateTotal() {
    return this.props.currentOrder.items &&
      this.props.currentOrder.items.reduce((total, item) => (total + item.price * item.quantity), 0) / 100
  }

  makeCartItem(item) {
    return <CartItem key={item.id} item={item} handleRemove={ this.props.handleRemove } />
  }

  render() {
    return (
      <div className="pa4">
      {this.props.currentOrder.id}
        <div className="overflow-auto">
          <table className="f6 w-100 w90-m w-80-l mw8 center" cellSpacing="0">
            <thead>
              <tr>
                <TableElement elementType='th' value='Product Name'/>
                <TableElement elementType='th' value='Quantity'/>
                <TableElement elementType='th' value='Price'/>
                <TableElement elementType='th' value='Remove'/>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {this.props.currentOrder.items &&
               this.props.currentOrder.items.map(this.makeCartItem)}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ auth, order }) => ({ user: auth, currentOrder: order.currentOrder })

const mapDispatch = (dispatch) => ({ handleRemove: (itemId) => {
  dispatch(deleteItemFromDatabase(itemId))
}})

export default connect(mapProps, mapDispatch)(Cart)
