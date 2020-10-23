const routesCards = require('express').Router();
const {
  createCard,
  getCards,
  deleteCard,
} = require('../controllers/cards');

routesCards.post('/', createCard);
routesCards.get('/', getCards);
routesCards.delete('/:id', deleteCard);

module.exports = routesCards;
