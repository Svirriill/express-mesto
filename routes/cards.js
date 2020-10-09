const routesCards = require('express').Router();
const path = require('path');
const getJson = require('../read-file');

const cards = (req, res) => (
  getJson(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      return;
    }
    res.status(200).send(data);
  })
)

routesCards.get('/', cards);

module.exports = routesCards;
