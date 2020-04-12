const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.get('/:id', async (req, res) => {
  // const id = parseInt(req.params.id, 10);
  const user = await usersService.getById(req.params.id);

  res.json([user].map(User.toResponse)[0]);
});

router.post('/', async (req, res) => {
  const user = {
    id: '2',
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };

  await res.json([user].map(User.toResponse)[0]);
});

router.put('/:id', async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);

  res.json([user].map(User.toResponse)[0]);
});

router.delete('/:id', async (req, res) => {
  // const user = await usersService.deleteUser(req.params.id);

  res.status(204).send();
});

// const catchErrors = fn => async (req, res, next) => {
//   try {
//     return await fn(req, res, next);
//   } catch (error) {
//     // Log all errors
//     console.error(error);
//     return next(error);
//   }
// };

module.exports = router;
