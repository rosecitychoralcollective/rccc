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
      <h1 className={classes.primary}>
        {t('Home-Page-Welcome-Header')}
      </h1>
      {_.range(1, 5).map((textId) => (
        <p key={textId}>
          {t(`Home-Page-Welcome${textId}`)}
        </p>
      ))}
      <YouTube
        videoId="IfD8vVGFlAM"
        containerClassName="youtubeContainer"
      />
      <h2 className={classes.secondary}>
        { t('Home-Page-Mission-Title') }
      </h2>
      <p>
        { t('Home-Page-Mission-Text') }
      </p>
    </div>
  );
};

export default HomeScreen;
