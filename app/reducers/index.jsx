import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  order: require('./order').default,
  product: require('./product').default,
  user: require('./user').default,
})

export default rootReducer
