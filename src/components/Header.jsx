import React, { useState } from 'react';
import {
  AppBar, IconButton, Tab, Tabs, MenuItem, Menu, Popover,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import useWindowSize from '../hooks/useWindowSize';
import useTabs from '../hooks/useTabs';
import availableStyles from '../resources/availableStyles';
import translateString from '../utils/StringHelper';

const t = translateString;

const Header = ({ classes, setStyle }) => {
  const [tabs, tabIndex, changeTabs] = useTabs();
  const [styleAnchorEl, setStyleAnchorEl] = useState(null);
  const [popperAnchorEl, setPopperAnchorEl] = useState(null);

  const menuItems = availableStyles.map((_, i) => `Style ${i + 1}`);

  const handleStyleMenuClick = (event) => {
    setStyleAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setStyleAnchorEl(null);
  };

  const handlePopperClose = () => {
    setPopperAnchorEl(null);
  };

  const handleMenuClick = (index) => {
    setStyle(index);
    handleClose();
  };

  const handleFbClick = () => {
    window.open(t('Facebook-Link'));
  };

  const handleEmailClick = () => {
    window.open('mailto:rosecitychoralcollective@gmail.com');
  };

  const handlePhoneClick = (event) => {
    setPopperAnchorEl(event.currentTarget);
  };

  const [width] = useWindowSize();

  return (
    <div>
      {
        width >= 0
          ? (
            <AppBar
              className={classes.header}
            >
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
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  edge="end"
                  onClick={handleStyleMenuClick}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={handleFbClick}
                  color="inherit"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={handleEmailClick}
                  color="inherit"
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={handlePhoneClick}
                  color="inherit"
                >
                  <PhoneIcon />
                </IconButton>
                <Menu
                  id="menu"
                  anchorEl={styleAnchorEl}
                  keepMounted
                  open={Boolean(styleAnchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((name, index) => (
                    <MenuItem
                      key={name}
                      onClick={() => handleMenuClick(index)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Menu>
                <Popover
                  open={Boolean(popperAnchorEl)}
                  anchorEl={popperAnchorEl}
                  onClose={handlePopperClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <div className={classes.phonePopover}>{t('Phone-Number')}</div>
                </Popover>
              </Tabs>
            </AppBar>
          )
          : (
            <AppBar className={classes.header}>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" onClick={handleStyleMenuClick} color="inherit">
                <MoreIcon />
              </IconButton>
            </AppBar>
          )
      }
    </div>
  );
};

export default Header;
