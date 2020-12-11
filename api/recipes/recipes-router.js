const express = require('express');

const db = require('../../data/dbConfig');
const Recipe = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get recipes' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipe.findById(id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get recipes' });
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
