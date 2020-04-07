const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: 1,
      name: 'Alex',
      login: 'alex',
      password: 'qwerty123'
    },
    {
      id: 2,
      name: 'Viktoria',
      login: 'vika',
      password: 'qwerty123'
    }
  ];

  return mockData;
};

module.exports = { getAll };
