import React from 'react';
import _ from 'lodash';
import YouTube from 'react-youtube';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const HomeScreen = ({ classes }) => {
  const t = translateString;
  useTitle(t('Home-Page-Title'));

  return (
    <div>
      <h1 className={classes.preClick}>
        {t('Home-Page-Welcome-Header')}
      </h1>
      {_.range(1, 5).map((textId) => (
        <p key={textId}>
          {t(`Home-Page-Welcome${textId}`)}
        </p>
      ))}
      <YouTube videoId="dQw4w9WgXcQ" />
      <h2 className={classes.preClick}>
        Our Mission
      </h2>
      <p>
        At Rose City Choral Collective, we endeavor to create quality choral music in a welcoming
        environment that promotes learning and growth. We aim to give a memorable performance
        experience that brings joy to both singer and listener
      </p>
    </div>
  );
};

export default HomeScreen;
