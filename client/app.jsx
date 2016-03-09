import React from 'react';

// Define our Layout component
export const Layout = ({ content }) => (
  <div>
    <h1>Quitr</h1>
    <hr />
    <div>{content}</div>
  </div>
);

// Define our Welcome component
export const Welcome = ({ name }) => (
  <div>
    Hello, {name}.
  </div>
);

