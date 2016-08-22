// @flow

'use strict';

import React from 'react';
import FCM from 'react-native-fcm';

class NotificationsController extends React.Component {
  constructor(props) {
    super(props);

    this.manageToken = this.manageToken.bind(this);
  }

  function manageToken(newToken) {
    console.log(newToken);
  }

  componentDidMount() {
    FCM.getFCMToken().then(this.manageToken);
  }

  render() {
    return null;
  }
}


export default NotificationsController;
