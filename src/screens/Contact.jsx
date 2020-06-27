import React from 'react';
import { Link } from '@material-ui/core';
import translateString from '../utils/StringHelper';

const Contact = ({ classes }) => {
  const t = translateString;

  const email = `mailto:${t('Contact-Page-Email-Address')}`;
  const facebook = `https://www.facebook.com/${t('Contact-Page-Facebook-Page')}`;

  return (
    <div>
      <h1 className={classes.primary}>
        {t('Contact-Page-Title')}
      </h1>
      <h2 className={classes.secondary}>
        {t('Contact-Page-Email')}
        <Link
          href={email}
          className={classes.link}
        >
          {t('Contact-Page-Email-Address')}
        </Link>
      </h2>
      <h2 className={classes.secondary}>
        {t('Contact-Page-Facebook')}
        <Link
          href={facebook}
          className={classes.link}
        >
          {t('Contact-Page-Facebook-Page')}
        </Link>
      </h2>
      <h2 className={classes.secondary}>
        {t('Contact-Page-Phone')}
        <div className={classes.link}>{t('Contact-Page-Phone-Number')}</div>
      </h2>
    </div>
  );
};

export default Contact;
