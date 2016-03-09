import React from 'react';

// Define our Layout component
const Layout = ({ content }) => (
  <div>
    <h1>Quitr</h1>
    <hr />
    <div>{content}</div>
  </div>
);

Layout.propTypes = {
  content: React.PropTypes.element,
};

export { Layout };
