const getById = async id => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      title: 'Change hrefs',
      order: 1,
      description: 'Description of task #1',
      userId: '1',
      boardId: '1',
      columnId: 1
    },
    {
      id: '2',
      title: 'Add mirror domain',
      order: 1,
      description: 'Description of task #2',
      userId: '1',
      boardId: '1',
      columnId: 1
    }
  ];

  return mockData.find(task => task.id === id);
};

module.exports = { getById };
