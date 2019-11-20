import React from 'react';
import {
  Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Classes,
} from '@blueprintjs/core';

function Header() {
  const buttons = ['About', 'Events', 'Donations', 'History', 'Contact'];
  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>RCCC</NavbarHeading>
        <NavbarDivider />
        <Button className={Classes.MINIMAL} intent="warning" text="Join" />
        {buttons.map((b) => <Button className={Classes.MINIMAL} key={b} intent="primary" text={b} />)}
      </NavbarGroup>
    </Navbar>
  );
}

export default Header;
