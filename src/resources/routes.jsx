import React from 'react';

import HomeScreen from '../screens/Home';
import About from '../screens/About';
import Events from '../screens/Events';
import JoinScreen from '../screens/Join';

const routes = {
  '/': () => <HomeScreen />,
  '/join': () => <JoinScreen />,
  '/about': () => <About />,
  '/events': () => <Events />,
};

export default routes;
