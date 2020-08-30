import React, { useState } from 'react';
import {
  AppBar, IconButton, MenuItem, Menu, Popover, Toolbar,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MenuIcon from '@material-ui/icons/Menu';
import _ from 'lodash';
import translateString from '../utils/StringHelper';

const t = translateString;

const SmallHeader = ({ props }) => {
  const {
    classes,
    tabs,
    changeTabs,
    handleFbClick,
    handleEmailClick,
    handlePhoneClick,
    handlePopperClose,
    popperAnchorEl,
  } = props;
  const [contactAnchorEl, setContactAnchorEl] = useState(null);
  const [tabAnchorEl, setTabAnchorEl] = useState(null);

  const handleContactClose = () => {
    setContactAnchorEl(null);
  };

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleTabClose = () => {
    setTabAnchorEl(null);
  };

  const handleTabClick = (index) => {
    changeTabs('', index);
    handleTabClose();
  };

  const openTabMenu = (event) => {
    setTabAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (str, evt) => {
    if (str === 'fb') {
      handleFbClick();
    } else if (str === 'email') {
      handleEmailClick();
    } else {
      handlePhoneClick(evt);
    }
    handleContactClose();
  };

  return (
    <AppBar
      className={classes.header}
    >
      <Toolbar>
        <div className={classes.tabs}>
          <IconButton
            onClick={openTabMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={tabAnchorEl}
            keepMounted
            open={Boolean(tabAnchorEl)}
            onClose={handleTabClose}
          >
            {tabs.map((tab, index) => (
              <MenuItem
                key={tab.name}
                onClick={() => handleTabClick(index)}
              >
                {_.startCase(tab.name)}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className={classes.contactButtons}>
          <IconButton
            onClick={handleContactClick}
            color="inherit"
          >
            <ContactSupportIcon />
          </IconButton>
          <Menu
            id="contact-menu"
            keepMounted
            anchorEl={contactAnchorEl}
            open={Boolean(contactAnchorEl)}
            onClose={handleContactClose}
          >
            <MenuItem
              key="fb"
              onClick={() => handleMenuClick('fb')}
              id="facebook-button"
            >
              <FacebookIcon />
            </MenuItem>
            <MenuItem
              key="email"
              onClick={() => handleMenuClick('email')}
              id="email-button"
            >
              <EmailIcon />
            </MenuItem>
            <MenuItem
              key="phone"
              onClick={(evt) => handleMenuClick('phone', evt)}
              id="phone-button"
            >
              <PhoneIcon />
            </MenuItem>
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
            <div id="phone-number" className={classes.phonePopover}>{t('Phone-Number')}</div>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SmallHeader;
