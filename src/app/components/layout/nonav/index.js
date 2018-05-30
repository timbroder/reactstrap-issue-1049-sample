import React from 'react';

import PropTypes from 'prop-types';

import HeaderNoNav from 'app/components/content/header/nonav';


const NoNavLayout = props => (
  <div>
    <div>
      <HeaderNoNav />
      {props.children}
    </div>
  </div>
);

NoNavLayout.propTypes = {
  children: PropTypes.node,
};

NoNavLayout.defaultProps = {
  children: null,
};

export default NoNavLayout;
