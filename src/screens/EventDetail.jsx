import React from 'react';
import { getEventById } from '../resources/events';

const EventDetail = ({ id }) => {
  console.log(`About to get event with id: ${id}`);
  const event = getEventById(id);

  return (
    <div style={{ margin: 80 }}>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetail;
