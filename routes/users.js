const routesUser = require('express').Router();
const {
  users,
  user
} = require('../controllers/users')

routesUser.get('/', users);
routesUser.get('/:id', user);

module.exports = routesUser;