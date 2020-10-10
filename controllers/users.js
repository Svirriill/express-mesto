const path = require('path');
const getJson = require('../read-file');

const users = (req, res) => (
  getJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Ошибка сервера' });
        return;
      }
      res.status(200).send(data);
    })
);

const user = (req, res) => (
  getJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: 'Ошибка сервера' });
        return;
      }
      const userId = data.find((item) => item._id === req.params.id);
      if (userId) {
        res.send(userId);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
);

module.exports = {
  users,
  user,
};
