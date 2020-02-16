import React from 'react';
import { Avatar } from '@material-ui/core';
import translateString from '../utils/StringHelper';
import MainContent from '../components/MainContent';
import cat from '../resources/assets/cat.jpg';

const About = () => {
  const t = translateString;

  return (
    <div className="mainContent">
      <MainContent
        header={t('About-Screen-Header')}
        body={t('About-Screen-Body')}
      />
      <div>
        <Avatar alt={t('About-Screen-President')} src={cat}>B</Avatar>
        Dread pirate molly
      </div>
      <div>
        <Avatar alt={t('About-Screen-Vice-President')} src={cat} />
        Annie
      </div>
      <div>
        <Avatar alt={t('About-Screen-Secretary-Of-State')} src={cat} />
        Lyn
      </div>
      <div>
        <Avatar alt={t('About-Screen-Minister-Of-The-Interior')} src={cat} />
        Holly
      </div>
      <div>
        <Avatar alt={t('About-Screen-Director')} src={cat} />
        Alyssa
      </div>
      <div>
        <Avatar alt={t('About-Screen-Lord-Of-The-Dance')} src={cat} />
        Mark
      </div>
    </div>
  );
};

About.propTypes = {
};

export default About;
