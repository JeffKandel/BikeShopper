'use strict'

const Sequelize = require('sequelize')

// Including some additional flexibility in case a user logged in with oAuth
module.exports = db => db.define('items', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
}, {
  defaultScope: {
    include: [{
      model: db.model('products'),
    }]
  }
})

module.exports.associations = (Item, { Order, Product }) => {
  Item.belongsTo(Order)
  Item.belongsTo(Product)
}
