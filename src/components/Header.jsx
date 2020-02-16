import React, { useState } from 'react';
import {
  AppBar, IconButton, Tab, Tabs, MenuItem, Menu,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';
import { navigate, usePath } from 'hookrouter';
import useStyle from '../hooks/useStyle';

const Header = () => {
  const [tabIndex, setIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [style, setStyle] = useStyle();

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

  const adjustHighlighting = () => {
    const routeIndex = tabs.findIndex((t) => t.route === currentPath);
    setIndex(routeIndex);
  };

  /** This ensures that the nav bar has the correct highlighting when the back button is pressed */
  window.onpopstate = () => {
    adjustHighlighting();
  };


  const useStyles = makeStyles({
    ...style,
  });

  const classes = useStyles();

  const menuItems = [
    'Style 1',
    'Style 2',
    'Style 3',
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (index) => {
    setStyle(index);
    handleClose();
  };

  return (
    <div>
      <AppBar className={classes.root}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="tab bar"
          classes={{indicator: classes.indicator}}
          // className={classes.tabs}
        >
          {tabs.map((tab) => <Tab key={tab.title} label={tab.title} />)}
          <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" onClick={handleClick} color="inherit">
            <MoreIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((name, index) => <MenuItem key={name} onClick={() => handleMenuClick(index)}>{name}</MenuItem>)}
          </Menu>
        </Tabs>
      </AppBar>
    </div>
  );
};

Header.propTypes = {};

export default Header;
