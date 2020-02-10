import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { navigate, usePath } from 'hookrouter';

const Header = () => {
  const [tabIndex, setIndex] = useState(0);

  const tabs = [
    {
      title: 'home',
      route: '/',
    },
    {
      title: 'join',
      route: '/join',
    },
    {
      title: 'events',
      route: '/events',
    },
    {
      title: 'about',
      route: '/about',
    },
  ];

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].route);
    setIndex(newValue);
  };

  const currentPath = usePath(false);

  window.onpopstate = () => {
    const routeIndex = tabs.findIndex((t) => t.route === currentPath);
    setIndex(routeIndex);
  };

  return (
    <div>
      <AppBar color="primary" className="navBar">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="tab bar"
        >
          {tabs.map((tab) => <Tab key={tab.title} label={tab.title} />)}
        </Tabs>
      </AppBar>
    </div>
  );
};

Header.propTypes = {};

export default Header;
