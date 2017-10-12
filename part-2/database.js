const promise = require('bluebird')
const options = { promiseLib: promise }
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

module.exports = {
  //Find the IDs, names, prices, and sections for all grocery items
  allItems: () => {
    return db.any('SELECT * FROM items')
    .then(result => {
      return result
    })
  },
  // Find the IDs and names of all grocery items in the given section
  itemsInSection: (section) => {
		return db.manyOrNone(`SELECT id, name FROM items WHERE section=$1`, section)
    .then(result => {
      return result
    })
	},
  // Find the IDs, names, and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price
  cheapItems: () => {
		return db.manyOrNone(`SELECT id, name, price FROM items WHERE price < '10'ORDER BY price ASC`)
    .then(result => {
      return result
    })
  },

  //Get the count of all grocery items in the given section
  countItemsInSection: (section) => {
		return db.oneOrNone(`SELECT COUNT(*) FROM items	WHERE section=$1`, section)
    .then(result => {
      return result
    })
	},

  // Find the IDs and order dates for the 10 most recent orders
	mostRecentOrders: () => {
		return db.manyOrNone(`SELECT (id, order_date) FROM orders	ORDER BY order_date DESC LIMIT 10;`)
    .then(result => {
      return result
    })
	},
  //Find the shopper's name who made the most recent order
	lastShopperName: () => {
		return db.oneOrNone(`SELECT (first_name, last_name) FROM shoppers WHERE id = (SELECT shopper_id\
            FROM orders ORDER BY order_date DESC	LIMIT 1);`)
    .then(result => {
      return result
    })
	},

  //Find the sum of all prices for items for a specific order
	orderTotal: (orderId) => {
		return db.oneOrNone(`SELECT SUM(items.price) FROM items INNER JOIN order_items\
                        ON order_items.order_id = $1;`, orderId)
    .then(result => {
      return result
    })
	}
}
