import React from 'react';
import { Paper } from '@material-ui/core';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const Contact = () => {
  const t = translateString;
  useTitle(t('Contact-Page-Title'));

  return (
    <div>
      <Paper style={{ padding: 25 }}>
        <h1>
          Contact us
        </h1>
        <h2>
          Email: rosecitychoralcollective@gmail.com
        </h2>
        <h2>
          Facebook:
          {' '}
          <a
            href="https://www.facebook.com/rosecitychoralcollective"
          >
              @rosecitychoralcollective
          </a>
        </h2>
        <h2>
          Phone: 503-867-5309. Ask for Jenny.
        </h2>
      </Paper>
    </div>
  );
};

export default Contact;
