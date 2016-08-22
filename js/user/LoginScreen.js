// @flow

'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}> DUMP TEXT. </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: "#4A4A4A",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: '#F7F7F7',
    fontFamily: "OldStandard-Regular"
  }
});
