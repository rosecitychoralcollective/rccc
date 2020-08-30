import React, { useState } from 'react';
import {
  AppBar, IconButton, MenuItem, Menu, Popover, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import availableStyles from '../resources/availableStyles';
import translateString from '../utils/StringHelper';

const t = translateString;

const FullHeader = ({ props }) => {
  const {
    setStyle,
    classes,
    tabs,
    tabIndex,
    changeTabs,
    handleFbClick,
    handleEmailClick,
    handlePhoneClick,
    handlePopperClose,
    popperAnchorEl,
  } = props;
  const [styleAnchorEl, setStyleAnchorEl] = useState(null);

  const menuItems = availableStyles.map((_, i) => `Style ${i + 1}`);

  const handleStyleMenuClick = (event) => {
    setStyleAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setStyleAnchorEl(null);
  };

  const handleMenuClick = (index) => {
    setStyle(index);
    handleClose();
  };

  const env = process.env.NODE_ENV;

  return (
    <AppBar
      className={classes.header}
    >
      <Toolbar>
        <div className={classes.tabs}>
          <Tabs
            value={tabIndex}
            onChange={changeTabs}
            aria-label="tab bar"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ indicatorColor: classes.indicatorColor }}
          >
            {
              tabs.map((tab) => (
                <Tab key={tab.name} label={tab.name} />
              ))
            }
            {
              env === 'development' && (
                <div>
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleStyleMenuClick}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                  <Menu
                    id="style-menu"
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
                </div>
              )
            }
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
          </Tabs>
        </div>
        <div className={classes.contactButtons}>
          <IconButton
            onClick={handleFbClick}
            color="inherit"
            id="facebook-button"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            onClick={handleEmailClick}
            color="inherit"
            id="email-button"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            onClick={handlePhoneClick}
            color="inherit"
            id="phone-button"
          >
            <PhoneIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FullHeader;
