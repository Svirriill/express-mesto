const path = require('path');
const getJson = require('../read-file');

const cards = (req, res) => (
  getJson(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      res.status(404).send({ message: 'Внутренняя ошибка сервера' });
      return;
    }
    res.status(200).send(data);
  })
)

module.exports = { cards }