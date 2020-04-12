const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.json(boards);
});

router.get('/:id', async (req, res) => {
  // const id = parseInt(req.params.id, 10);
  const board = await boardsService.getById(req.params.id);

  res.json(board);
});

router.get('/:id/tasks', async (req, res) => {
  // const id = parseInt(req.params.id, 10);
  const board = await boardsService.getById(req.params.id);

  res.json(board);
});

module.exports = router;
