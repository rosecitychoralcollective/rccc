const events = [
  {
    id: 0,
    title: 'My cool event',
    description: 'Singing but no dancing',
    date: 'October 31st at Midnight',
  },
  {
    id: 1,
    title: 'My lame event',
    description: 'Full of hollys',
    date: 'April 1st at 9am',
  },
  {
    id: 2,
    title: 'Another thing',
    description: 'stuff',
    date: 'August 1 4pm',
  },
];

export const getEventById = (id) => events.find((e) => e.id === parseInt(id, 10));

export default events;
