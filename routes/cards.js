const routesCards = require('express').Router();
const cards = require('../data/cards.json');

routesCards.get('/', (req, res) => {
  res.send(cards);
});

module.exports = routesCards;
