const express = require('express');

const recipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'the api is running' });
});

module.exports = server;
