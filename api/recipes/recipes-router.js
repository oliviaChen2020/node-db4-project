const express = require('express');

const db = require('../../data/dbConfig');

const router = express.Router();

router.get('/api/recipes', (req, res) => {
  // get all recipes from the database
  db('recipes')
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/api/ingredients', (req, res) => {
  // get all ingredients from the database
  db('ingredients')
    .leftJoin()
    .select()
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// create recipes
router.post('/api/recipes', (req, res) => {
  db('recipes')
    .insert(req.body)
    .then((ids) => {
      const id = ids[0];

      db('recipes')
        .where({ id })
        .first()
        .then((recipe) => {
          res.status(201).json(recipe);
        });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// remove recipes
router.delete('/api/recipes/:id', (req, res) => {
  db('recipes')
    .where({ id: req.params.id })
    .del()
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
