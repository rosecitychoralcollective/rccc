import React from 'react';
import { Paper } from '@material-ui/core';
import { navigate } from 'hookrouter';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';
import EventCard from '../components/EventCard';
import events from '../resources/events';

const Events = ({ classes }) => {
  const t = translateString;
  useTitle(t('EventList-Page-Title'));

  const handleClick = (e) => {
    navigate(`/eventdetail/${e}`);
  };

  const pastEvents = events.slice(1);

  return (
    <div>
      <Paper />
      <h1 className={classes.primary}>{ t('EventList-Page-Upcoming-Header') }</h1>
      <EventCard event={events[0]} handleClick={handleClick} />
      <br />
      <h2 className={classes.secondary}>{ t('EventList-Page-Previous-Header') }</h2>
      {pastEvents.map((e) => (
        <EventCard
          event={e}
          key={e.id}
          handleClick={handleClick}
          component="img"
        />
      ))}
    </div>
  );
};

export default Events;
