import React from 'react';
import PropTypes from 'prop-types';
import MainContent from '../components/MainContent';
import translateString from '../utils/StringHelper';

const JoinScreen = () => {
  const t = translateString;

  return (
    <MainContent
      header={t('Join-Screen-Header')}
      body={t('Join-Screen-Body')}
    />
  );
};

JoinScreen.propTypes = {
  style: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string,
  }).isRequired,
};

export default JoinScreen;