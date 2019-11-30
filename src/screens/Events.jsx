import React from 'react';
import MainContent from '../components/MainContent';
import translateString from '../utils/StringHelper';

const Events = () => {
  const t = translateString;

  return (
    <MainContent
      header={t('Event-Screen-Header')}
      body={t('Event-Screen-Body')}
    />
  );
};

export default Events;
