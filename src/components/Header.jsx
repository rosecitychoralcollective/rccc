import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useTabs from '../hooks/useTabs';
import translateString from '../utils/StringHelper';
import FullHeader from './FullHeader';
import SmallHeader from './SmallHeader';

const t = translateString;

const Header = ({ classes, setStyle }) => {
  const [tabs, tabIndex, changeTabs] = useTabs();
  const [popperAnchorEl, setPopperAnchorEl] = useState(null);

  const handlePopperClose = () => {
    setPopperAnchorEl(null);
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

  const props = {
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
  };

  return (
    <div>
      { width >= 1020
        ? <FullHeader props={props} />
        : <SmallHeader props={props} />
      }
    </div>
  );
};

export default Header;
