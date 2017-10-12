module.exports = {
allItems: () => {
  return db.any('SELECT * FROM items')
}
