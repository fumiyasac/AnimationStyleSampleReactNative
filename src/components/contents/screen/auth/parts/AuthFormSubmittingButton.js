
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Text,
  Button
} from 'native-base';

export default class AuthFormSubmittingButton extends React.Component {
  render() {
    const { buttonText } = this.props;
    return (
      <View style={styles.submitButtonView}>
        <Button style={styles.submitButtonBase} block disabled>
          <Text style={styles.submitButtonText}>{buttonText}</Text>
        </Button>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  submitButtonView: {
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  submitButtonBase: {
    backgroundColor: '#dddddd'
  },
  submitButtonText: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13,
    alignSelf: 'center',
    color: '#999999',
    backgroundColor: '#dddddd'
  }
});
