import React from 'react';
import PropTypes from 'prop-types';
import translateString from '../utils/StringHelper';
import MainContent from '../components/MainContent';

const HomeScreen = () => {
  const t = translateString;

  return (
    <MainContent
      header={t('Home-Screen-Welcome-Header')}
      body={t('Home-Screen-Placeholder')}
    />
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
