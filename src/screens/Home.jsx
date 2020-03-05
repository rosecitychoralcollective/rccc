import React from 'react';
import PropTypes from 'prop-types';
import translateString from '../utils/StringHelper';
import banner from '../resources/assets/banner.jpg';
import useTitle from '../hooks/useTitle';

const HomeScreen = () => {
  const t = translateString;
  useTitle(t('Home-Page-Title'));

  return (
    <div style={{ padding: 75, maxWidth: 700 }}>
      <h1>
        {t('Home-Page-Welcome-Header')}
      </h1>
      <p>
        {t('Home-Page-Placeholder')}
      </p>
      <h3>
        A Message from our director:
      </h3>
      <p>
        Ur all wonderful people. Keep doing you.
      </p>
      <img src={banner} width="700" alt="fake banner" />
    </div>
  );
};

HomeScreen.propTypes = {
  style: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string,
  }).isRequired,
};

export default HomeScreen;
