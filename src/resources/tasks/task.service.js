const tasksRepo = require('./task.memory.repository');

const getById = id => tasksRepo.getById(id);

module.exports = { getById };
