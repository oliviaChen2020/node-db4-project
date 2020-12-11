// recipes-model
const db = require('../../data/dbConfig');
module.exports = {
  getRecipes,
  findById,
  getShoppingList,
  //   getInstructions,
};
function getRecipes() {
  return db('recipes');
}
function findById(id) {
  return db('recipes').where({ id }).first();
}
function getShoppingList(id) {}
