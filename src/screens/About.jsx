import React from 'react';
import translateString from '../utils/StringHelper';
import MainContent from '../components/MainContent';

const About = () => {
  const t = translateString;

  return (
    <MainContent
      header={t('About-Screen-Header')}
      body={t('About-Screen-Body')}
    />
  );
};

export default About;