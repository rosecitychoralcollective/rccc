import React, { useEffect, useState } from 'react';
import {
  AppBar, IconButton, Tab, Tabs, MenuItem, Menu,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';
import { navigate, usePath } from 'hookrouter';
import useStyle from '../hooks/useStyle';
import useWindowSize from '../hooks/useWindowSize';
import translateString from '../utils/StringHelper';

const Header = () => {
  const t = translateString;
  const [tabIndex, setIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [style, setStyle] = useStyle();

  const TITLE_SUFFIX = `| ${t('Organization-Name')}`;

  const [title, setTitle] = useState(`${t('Home-Page-Title')} ${TITLE_SUFFIX}`);

  const tabs = [
    {
      name: 'home',
      route: '/',
      title: t('Home-Page-Title'),
    },
    {
      name: 'join',
      route: '/join',
      title: t('Join-Page-Title'),
    },
    {
      name: 'events',
      route: '/events',
      title: t('EventList-Page-Title'),
    },
    {
      name: 'about',
      route: '/about',
      title: t('About-Page-Title'),
    },
    {
      name: 'support',
      route: '/support',
      title: t('Support-Page-Title'),
    },
    {
      name: 'contact',
      route: '/contact',
      title: t('Contact-Page-Title'),
    },
  ];

  const handleTabClick = (_, newValue) => {
    const currentTab = tabs[newValue];
    navigate(currentTab.route);
    setIndex(newValue);
    setTitle(`${currentTab.title} ${TITLE_SUFFIX}`);
  };

  useEffect(() => {
    document.title = title;
  });

  const currentPath = usePath(false);

  const adjustHighlighting = () => {
    const routeIndex = tabs.findIndex((t) => t.route === currentPath);
    setIndex(routeIndex);
    setTitle(`${tabs[routeIndex].title} ${TITLE_SUFFIX}`);
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

  const [width] = useWindowSize();

  return (
    <div>
      {
        width >= 0
          ? (
            <AppBar className={classes.root}>
              <Tabs
                value={tabIndex}
                onChange={handleTabClick}
                aria-label="tab bar"
                variant="scrollable"
                scrollButtons="auto"
                classes={{ indicator: classes.indicator }}
              >
                {
                  tabs.map((tab) => (
                    <Tab key={tab.name} label={tab.name} />
                  ))
                }
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
          )
          : (
            <AppBar className={classes.root}>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" onClick={handleClick} color="inherit">
                <MoreIcon />
              </IconButton>
            </AppBar>
          )
      }
    </div>
  );
};

Header.propTypes = {};

export default Header;
