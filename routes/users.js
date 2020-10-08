const routesUser = require('express').Router();
const users = require('../data/users.json');

routesUser.get('/', (req, res) => {
  res.send(users);
});

routesUser.get('/:id', (req, res) => {
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = routesUser;
