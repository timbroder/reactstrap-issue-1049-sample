import React from 'react';

import PropTypes from 'prop-types';

import NotFoundView from './view';


const NotFoundContainer = (props) => {
  function homeButtonClick() {
    props.history.push('/');
  }

  return (
    <NotFoundView
      homeButtonClick={homeButtonClick}
    />
  );
};

NotFoundContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

NotFoundContainer.defaultProps = {
  history: {},
};

export default NotFoundContainer;
