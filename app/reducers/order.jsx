import axios from 'axios'

const initialState = {
  pastOrders: [],
  currentOrder: {}
}

/* -----------------    ACTION TYPES     ------------------ */
const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER'
const SET_PAST_ORDERS = 'SET_PAST_ORDERS'
const UPDATE_ORDER = 'UPDATE_ORDER'
const DELETE_ITEM_FROM_ORDER = 'DELETE_ITEM_FROM_ORDER'

/* ------------   ACTION CREATORS     ------------------ */

export const setCurrentOrder = (order) => ({
  type: SET_CURRENT_ORDER,
  order: order
})

export const setPastOrders = (orders) => ({
  type: SET_PAST_ORDERS,
  pastOrders: orders
})

export const deleteItemFromOrder = (productId) => ({
  type: DELETE_ITEM_FROM_ORDER,
  productId
})

/* ------------       REDUCERS     ------------------ */
export default function(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_CURRENT_ORDER:
      newState.currentOrder = action.order
      break
    case SET_PAST_ORDERS:
      newState.pastOrders = action.pastOrders
      break
    case DELETE_ITEM_FROM_ORDER:
      newState.currentOrder = _removeItemFromOrder(action.productId, state.currentOrder)
      break
    default:
      return state
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchPastOrders = () => dispatch => {
  return axios.get('/api/orders')
    .then(res => dispatch(setPastOrders(res.data)))
    .catch(err => console.error(`Fetching past orders unsuccesful`, err))
}

export const fetchSessionOrder = () => dispatch => {
  return axios.get('/api/orders/new')
    .then(res => dispatch(setCurrentOrder(res.data)))
    .catch(err => console.error(`Fetching new order unsuccesful`, err))
}

export const addItemToOrder = (item) => dispatch => {
  return axios.post(`/api/items/`, item)
    .then(res => dispatch(setCurrentOrder(res.data)))
    .catch(err => console.error(`Updating order #${item.order_id} unsuccessful`, err))
}

export const mergeCurrentOrder = (databaseOrder, sessionOrder) => dispatch => {
  dispatch(setCurrentOrder(_naiveMergeOrders(databaseOrder, sessionOrder)))
}

export const deleteItemFromDatabase = (productId) => dispatch => {
  return axios.delete(`/api/items/${productId}`)
    .then(res => {
      dispatch(deleteItemFromOrder(productId))
    })
    .catch(err => console.error(`deleting item id #${itemId} unsuccessful`, err))
}
  /* ------------       HELPER FUNCTIONS     ------------------ */

/* Naively merge orders with the follow strategy:
 *  1) Include everything from primary
 *  2) Add all items from secondary to primary
 */
export const _naiveMergeOrders = (databaseOrder = [], sessionOrder) => {
  if (!sessionOrder.items) {
    return databaseOrder
  }
  const mergedItems = databaseOrder.items.concat(sessionOrder.items)
  return Object.assign({}, databaseOrder, { items: mergedItems })
}

const _removeItemFromOrder = (productId, order) => {
  const filteredItems = order.items.filter(item => {
    return item.product_id !== productId
  })

  return Object.assign({}, order, {items: filteredItems})
}
