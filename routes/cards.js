const routesCards = require('express').Router();
const { cards } = require('../controllers/cards');

routesCards.get('/', cards);

module.exports = routesCards;
