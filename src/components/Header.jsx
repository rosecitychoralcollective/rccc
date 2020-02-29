import React from 'react';
import {
  AppBar, IconButton, Tab, Tabs, MenuItem, Menu,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';
import useStyle from '../hooks/useStyle';
import useWindowSize from '../hooks/useWindowSize';
import useTabs from '../hooks/useTabs';

const Header = () => {
  const [tabs, tabIndex, changeTabs] = useTabs();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [style, setStyle] = useStyle();

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
                onChange={changeTabs}
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
