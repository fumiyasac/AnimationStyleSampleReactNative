
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

export default class AuthFormSubmitButton extends React.Component {
  render() {
    const { buttonText, onPressSubmitButton } = this.props;
    return (
      <View style={styles.submitButtonView}>
        <Button onPress={onPressSubmitButton} style={styles.submitButtonBase} block>
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
    backgroundColor: '#4169e1'
  },
  submitButtonText: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13,
    alignSelf: 'center',
    color: '#ffffff',
    backgroundColor: '#4169e1'
  }
});
