import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';

import Header from './components/Header';
import routes from './resources/routes';

export default function App() {
  const routeMatch = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      { routeMatch }
    </div>
  );
}
