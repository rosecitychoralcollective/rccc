import React from 'react';
import { Paper } from '@material-ui/core';
import { navigate } from 'hookrouter';
import cat from '../resources/assets/cat.jpg';
import cat2 from '../resources/assets/cat2.jpg';
import translateString from '../utils/StringHelper';
import EventCard from '../components/EventCard';
import events from '../resources/events';

const Events = () => {
  const t = translateString;

  const handleClick = (e) => {
    navigate(`/eventdetail/${e}`);
  };

  const pastEvents = events.slice(1);

  return (
    <div>
      <Paper style={{ padding: 25 }} />
      <h1>{ t('EventList-Page-Upcoming-Header') }</h1>
      <EventCard image={cat} handleClick={handleClick} data={events[0]} />
      <br />
      <h1>{ t('EventList-Page-Previous-Header') }</h1>
      {pastEvents.map((e) => (
        <EventCard
          key={e.title}
          image={cat2}
          handleClick={handleClick}
          data={e}
        />
      ))}
    </div>
  );
};

Events.propTypes = {
};

export default Events;
