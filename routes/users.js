const routesUser = require('express').Router();
const getJson = require('../read-file');
const path = require('path');

const users = (req, res) => (
  getJson(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      res.status(500).send({ message:'Ошибка сервера' });
      return;
    }
    res.status(200).send(data);
  })
)

const user = (req, res) => (
  getJson(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      res
        .status(500)
        .send({ message: 'Ошибка сервера' });
      return;
    }
  const user = data.find((item) => item._id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
})
)

routesUser.get('/', users);
routesUser.get('/:id', user);

module.exports = routesUser;