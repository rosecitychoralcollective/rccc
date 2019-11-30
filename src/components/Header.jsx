import React from 'react';
import PropTypes from 'prop-types';
import {
  Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Classes,
} from '@blueprintjs/core';
import _ from 'lodash';
import About from '../screens/About';
import Events from '../screens/Events';

const Header = ({ handleNav, style }) => {
  const handleClick = (component) => {
    handleNav(component);
  };

  const dataMap = {
    about: <About />,
    events: <Events />,
    donations: undefined,
    history: undefined,
    contact: undefined,
  };

  const buttons = _.toPairs(dataMap);

  console.log(style);

  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>RCCC</NavbarHeading>
        <NavbarDivider />
        <Button className={style.primary} intent="warning" text="Join" />
        {buttons.map((b) => (
          <Button
            className={Classes.MINIMAL}
            key={b}
            intent="primary"
            text={_.upperFirst(b[0])}
            onClick={() => handleClick(b[1])}
          />
        ))}
      </NavbarGroup>
    </Navbar>
  );
};

Header.propTypes = {
  handleNav: PropTypes.func.isRequired,
  style: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string,
  }).isRequired,
};

export default Header;
