import React from 'react';

import HomeScreen from '../screens/Home';
import About from '../screens/About';
import Events from '../screens/Events';
import JoinScreen from '../screens/Join';
import EventDetail from '../screens/EventDetail';

const routes = {
  '/': () => <HomeScreen />,
  '/join': () => <JoinScreen />,
  '/about': () => <About />,
  '/events': () => <Events />,
  '/eventdetail/:id': ({ id }) => <EventDetail id={id} />,
};

export default routes;
