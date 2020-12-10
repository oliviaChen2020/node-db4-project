exports.seed = function (knex, Promise) {
  return knex('steps').insert([
    { step_number: 1, step_description: 'Preparing the Meat', recipe_id: 1 },
    {
      step_number: 2,
      step_description: 'Preparing the vegetables',
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_description: 'preparing the Taco Shells',
      recipe_id: 1,
    },
    {
      step_number: 4,
      step_description: 'Grill the bread with butter on',
      recipe_id: 3,
    },
    {
      step_number: 5,
      step_description: 'Putting it all together',
      recipe_id: 3,
    },
    {
      step_number: 6,
      step_description: 'Bake in the oven for 40 to 45 minutes',
      recipe_id: 2,
    },
  ]);
};
