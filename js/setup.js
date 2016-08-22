// @flow

'use strict';

import React from 'react';

import NotificationsDownApp from './NotificationsDownApp';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

function setup(): ReactClass<{}> {
  console.disableYellowBox = true;

  class Root extends React.Component {
    state: {
      isLoading: boolean;
      store: any;
    };

    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }

      return (
        <Provider store={this.state.store}>
          <NotificationsDownApp />
        </Provider>
      );
    }
  }

  return Root;
}

global.LOG = (...args) => {
  console.log('/-------------------------------\\');
  console.log(...args);
  console.log('\\-------------------------------/');
  return args[args.length - 1];
};

export default setup;
