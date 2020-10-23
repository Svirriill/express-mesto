const usersRouter = require('express').Router();
const {
  createUser,
  getUsers,
  getUser,
} = require('../controllers/users');

usersRouter.post('/', createUser);
usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);

module.exports = usersRouter;
