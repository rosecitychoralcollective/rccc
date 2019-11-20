import React from 'react';
import { H1, Classes } from '@blueprintjs/core';
import translateString from '../utils/StringHelper';

const HomeScreen = () => {
  const t = translateString;
  return (
    <div className={Classes.RUNNING_TEXT}>
      <div className="mainContent">
        <H1>{t('Home-Screen-Welcome-Header')}</H1>
        <p>{t('Home-Screen-Placeholder')}</p>
      </div>
    </div>
  );
};

export default HomeScreen;
