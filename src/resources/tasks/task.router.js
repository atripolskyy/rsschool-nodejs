const router = require('express').Router();
const tasksService = require('./task.service');

router.get('/:id', async (req, res) => {
  // const id = parseInt(req.params.id, 10);
  const task = await tasksService.getById(req.params.id);

  res.json(task);
});

module.exports = router;
