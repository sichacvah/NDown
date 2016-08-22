// @flow

'use strict';

import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import LoginScreen from './user/LoginScreen';
import NotificationsController from './NotificationsController';

class NotificationsDownApp extends React.Component {
  render() {
    let content = null;
    if (!this.props.isLoggedIn) {
      content = (<LoginScreen />);
    }

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content" />
        {content}
        <NotificationsController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function select(store: any): Object {
  return {
    isLoggedIn: store.user.isLoggedIn,
  };
}

export default connect(select)(NotificationsDownApp);
