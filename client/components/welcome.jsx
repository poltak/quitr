import React from 'react';

// Define our Welcome component
const Welcome = ({ name }) => (
  <div>
    Hello, {name}.
  </div>
);

Welcome.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export {Welcome};
