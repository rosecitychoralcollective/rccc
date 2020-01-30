import React from 'react';
import PropTypes from 'prop-types';

const MainContent = ({
  header, body,
}) => (
  <div>
    <div>
      <div className="mainContent">
        <h1>{header}</h1>
        <p>{body}</p>
      </div>
    </div>
  </div>
);

MainContent.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default MainContent;
