import React from 'react';
import PropTypes from 'prop-types';
import translateString from '../utils/StringHelper';
import MainContent from '../components/MainContent';
import banner from '../resources/assets/banner.jpg';
import useTitle from '../hooks/useTitle';

const HomeScreen = () => {
  const t = translateString;
  useTitle(t('Home-Page-Title'));

  return (
    <div>
      <MainContent
        header={t('Home-Page-Welcome-Header')}
        body={t('Home-Page-Placeholder')}
      />
      <h3>
        A Message from our director:
      </h3>
      <p>
        Ur all wonderful people. Keep doing you.
      </p>
      <img src={banner} alt="fake banner" />
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
