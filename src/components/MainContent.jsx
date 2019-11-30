import React from 'react';
import PropTypes from 'prop-types';
import { Classes, H1 } from '@blueprintjs/core';

const MainContent = ({ header, body, style }) => {
  console.log(style);
  return (
    <div>
      <div className={Classes.RUNNING_TEXT}>
        <div className="mainContent">
          <H1 className={style.secondary}>{header}</H1>
          <p className={style.secondary}>{body}</p>
          <p className={style.action1}>HURF BLURF</p>
          <p className={style.action2}>HONK BONK</p>
          <p className={style.action3}>BAHLBAHBAHKLHBAB</p>
        </div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  style: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string,
  }).isRequired,
}

export default MainContent;
