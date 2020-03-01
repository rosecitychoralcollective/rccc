import React from 'react';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const Contact = () => {
  const t = translateString;
  useTitle(t('Contact-Page-Title'));

  return (
    <div>
      Stuff
    </div>
  );
};

export default Contact;
