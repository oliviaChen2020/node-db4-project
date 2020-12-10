exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Tacos' },
    { recipe_name: 'Cheesy Vegetable Bake' },
    { recipe_name: 'Grilled Cheese Sandwich' },
  ]);
};
