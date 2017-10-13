### Requirements

- [x] __10:__ All files are stored under the `part-2/` folder
- [x] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [x] __10:__ SQL script to insert [grocery seed data][grocery-data] and load from CSV is created in a file `load-data.sql`
- [x] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`
- [x] __10:__ Tests can be run with the command `$ npm test`

User Stories: Ensure that your schema design can satisfy the following scenarios

- [x] __10__: As a shopper I can fetch all my orders
- [x] __10__: As a shopper I can have multiple items in an order

Implement these functions in `database.js` using [pg-promise](https://www.npmjs.com/package/pg-promise) to make the following queries:

- [x] __20:__ `allItems()` : Find the IDs, names, prices, and sections for all grocery **items**
- [x] __20:__ `itemsInSection(<section>)` : Find the IDs and names of all grocery **items** in the given section
- [x] __20:__ `cheapItems()` : Find the IDs, names, and prices of all grocery **items** that cost less than $10.00, ordered from lowest to highest price
- [x] __20:__ `countItemsInSection(<section>)` : Get the count of all grocery **items** in the given section
- [x] __20:__ `mostRecentOrders()` : Find the IDs and order dates for the 10 most recent **orders**
- [x] __20:__ `lastShopperName()` : Find the shopper's name who made the most recent **order**
- [x] __20:__ `orderTotal(<ID>)` : Find the sum of all prices for items for a specific **order**

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:

- [x] __20:__ A call to `itemsInSection("bulk")` returns the items `"Flour"`, `"Pasta"`, and `"Rice"`
- [x] __20:__ A call to `cheapItems()` returns the item with name `"Fish"` as the first item and the item with name `"Honey"` as the last item
- [x] __20:__ A call to `countItemsInSection("packaged")` returns `5`
