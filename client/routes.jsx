import React from 'react';
import {mount} from 'react-mounter';
// Load Layout and Welcome React components
import {Layout, Welcome} from './app.jsx';

FlowRouter.route('/', {

  action() {
    mount(Layout, {
      content: (<Welcome name="quitter" />),
    });
  },

});
