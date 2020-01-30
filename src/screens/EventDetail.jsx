import React from 'react';
import translateString from '../utils/StringHelper';

const EventDetail = () => {
  const t = translateString;

  return (
    <div style={{ margin: 80 }}>
      <h1>HOWDY PARDNER</h1>
      <p>this is the body</p>
    </div>
  );
};

export default EventDetail;
