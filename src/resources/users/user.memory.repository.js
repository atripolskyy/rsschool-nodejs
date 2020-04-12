const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      name: 'Alex',
      login: 'alex',
      password: 'qwerty123'
    },
    {
      id: '2',
      name: 'Viktoria',
      login: 'vika',
      password: 'qwerty123'
    }
  ];

  return mockData;
};

const getById = async id => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      name: 'Alex',
      login: 'alex',
      password: 'qwerty123'
    },
    {
      id: '2',
      name: 'Viktoria',
      login: 'vika',
      password: 'qwerty123'
    }
  ];

  return mockData.find(user => user.id === id);
};

const updateUser = async (id, data) => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      name: 'Alex',
      login: 'alex',
      password: 'qwerty123'
    },
    {
      id: '2',
      name: 'Viktoria',
      login: 'vika',
      password: 'qwerty123'
    }
  ];

  const userData = mockData.find(user => user.id === id);
  userData.name = data.name;
  userData.login = data.login;
  userData.password = data.password;

  return userData;
};

const deleteUser = async id => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      name: 'Alex',
      login: 'alex',
      password: 'qwerty123'
    },
    {
      id: '2',
      name: 'Viktoria',
      login: 'vika',
      password: 'qwerty123'
    }
  ];

  return mockData.find(user => user.id !== id);
};

module.exports = { getAll, getById, updateUser, deleteUser };
