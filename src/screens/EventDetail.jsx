import React from 'react';
import { getEventById } from '../resources/events';
import useTitle from '../hooks/useTitle';

const EventDetail = ({ id }) => {
  const event = getEventById(id);
  useTitle(event.title);

  return (
    <div>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetail;
