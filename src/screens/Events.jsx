import React from 'react';
import { Paper } from '@material-ui/core';
import cat from '../resources/assets/cat.jpg';
import cat2 from '../resources/assets/cat2.jpg';
import translateString from '../utils/StringHelper';
import EventCard from '../components/EventCard';

const Events = () => {
  const t = translateString;

  const handleClick = (e) => {
    console.log('yippie skippie');
  };

  return (
    <div>
      <Paper style={{ padding: 25 }} />
      <h1>Upcoming Events!</h1>
      <EventCard image={cat} handleClick={handleClick} />
      <br />
      <h1>Previous Events...</h1>
      <EventCard image={cat2} handleClick={handleClick} />
      <EventCard image={cat} handleClick={handleClick} />
    </div>
  );
};

Events.propTypes = {
};

export default Events;
