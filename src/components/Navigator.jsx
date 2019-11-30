import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import Header from './Header';

const Navigator = () => {
  const [currentPage, setPage] = useState();
  const [colorScheme, setScheme] = useState(
    {
      primary: 'markColorPrim',
      secondary: 'markColorSec',
      action1: 'markColorAct1',
      action2: 'markColorAct2',
      action3: 'markColorAct3',
    },
  );

  const handleNav = (page) => {
    setPage(page);
  };

  const handleChangeColor = (scheme) => {
    setScheme(scheme);
  };

  const defaultPage = <HomeScreen style={colorScheme} changeScheme={handleChangeColor} />;

  const page = currentPage === undefined ? defaultPage : currentPage;

  return (
    <div className="App">
      <Header
        handleNav={handleNav}
        style={colorScheme}
      />
      {page}
    </div>
  );
};

export default Navigator;
