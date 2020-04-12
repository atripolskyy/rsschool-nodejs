const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      title: 'Backlog',
      columns: [
        {
          id: '1',
          title: 'Backlog2',
          order: 1
        },
        {
          id: '2',
          title: 'Sprint2',
          order: 2
        }
      ]
    },
    {
      id: '2',
      title: 'To do',
      columns: [
        {
          id: '3',
          title: 'Backlog2',
          order: 1
        },
        {
          id: '4',
          title: 'Sprint2',
          order: 2
        }
      ]
    }
  ];

  return mockData;
};

const getById = async id => {
  // TODO: mock implementation. should be replaced during task development
  const mockData = [
    {
      id: '1',
      title: 'Backlog',
      columns: [
        {
          id: '1',
          title: 'Backlog2',
          order: 1
        },
        {
          id: '2',
          title: 'Sprint2',
          order: 2
        }
      ]
    },
    {
      id: '2',
      title: 'To do',
      columns: [
        {
          id: '3',
          title: 'Backlog2',
          order: 1
        },
        {
          id: '4',
          title: 'Sprint2',
          order: 2
        }
      ]
    }
  ];

  return mockData.find(board => board.id === id);
};

module.exports = { getAll, getById };
