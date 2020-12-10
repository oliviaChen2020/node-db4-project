exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'Beef' },
    { ingredient_name: 'Tomatoes' },
    { ingredient_name: 'Taco Shell' },
    { ingredient_name: 'Cheese' },
    { ingredient_name: 'Butter' },
    { ingredient_name: 'Bread' },
  ]);
};
