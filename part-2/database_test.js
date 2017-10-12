const expect = require('chai').expect
const database = require('./database')

describe('grocery_store', () => {

	context('itemsInSection()', () => {
		const bulk_items = ['Flour', 'Pasta', 'Rice']
		const bulk_items_Id = [16, 33, 36]

		it('Call to itemsInSection("bulk") should return items: "Flour", "Pasta", and "Rice"', () => {
			return database.itemsInSection('bulk').then(items => {
				const returnedbulk_items = items.map(item => item.name)
				const returnedbulk_items_Ids = items.map(item => item.id)

				expect(items.length).to.equal(3)
				expect(items[0].name).to.equal('Flour')
				expect(items[1].name).to.equal('Pasta')
				expect(items[2].name).to.equal('Rice')
				expect(items[0].id).to.equal(16)
				expect(items[1].id).to.equal(33)
				expect(items[2].id).to.equal(36)
				expect(returnedbulk_items).to.eql(bulk_items)
				expect(returnedbulk_items_Ids).to.eql(bulk_items_Id)
			})
		})
	})

	context('cheapItems()', () => {
		it('A call to cheapItems() returns the item with name "Fish" as the first item and the item with name "Honey" as the last item', () => {
			return database.cheapItems().then(items => {

				expect(items.length).to.equal(25)
				expect(items[0].name).to.equal('Fish')
				expect(items[24].name).to.equal('Honey')
			})
		})
	})

	context('countItemsInSection()', () => {
		it('Call to countItemsInSection("packaged") returns 5', () => {
			return database.countItemsInSection('packaged').then(items => {

				expect(items.count).to.equal('5')
			})
		})
	})
})
