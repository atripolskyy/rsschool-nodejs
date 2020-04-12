const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getById, updateUser, deleteUser };
