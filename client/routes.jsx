import React from 'react';
import {mount} from 'react-mounter';
// Load Layout and Welcome React components
import {Welcome, Layout} from './app.jsx';

FlowRouter.route('/', {

  name: 'default',

  action() {
    mount(Layout, {
      content: (<Welcome name="quitter" />),
    });
  },

});
