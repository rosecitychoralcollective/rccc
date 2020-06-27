import React from 'react';
import useTitle from '../hooks/useTitle';
import translateString from '../utils/StringHelper';

const Support = ({ classes }) => {
  const t = translateString;
  useTitle(t('Support-Page-Title'));

  return (
    <div>
      <h1 className={classes.primary}>Dues</h1>
      <p>Yo hook us up wit dat money fam.</p>
      <h2 className={classes.secondary}>Donate to us</h2>
      <p>Same as above but you haven&apos;t purchased singing rights.</p>
      <h4 className={classes.secondary}>
        to speak to someone about donating time or items, please contact us
        (with link to contact page)
      </h4>
    </div>
  );
};

export default Support;
