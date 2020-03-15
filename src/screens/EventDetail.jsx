import React from 'react';
import { getEventById } from '../resources/events';
import cat from '../resources/assets/cat.jpg';
import useTitle from '../hooks/useTitle';

const EventDetail = ({ id }) => {
  const event = getEventById(id);
  useTitle(event.title);

  return (
    <div style={{ padding: 75, maxWidth: 700 }}>
      <img src={cat} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetail;
