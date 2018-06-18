
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

export default class RecordListAddButton extends React.Component {
  render() {
    const { buttonText, onPressAddButton } = this.props;
    return (
      <View style={styles.addButtonView}>
        <Button onPress={onPressAddButton} style={styles.addButtonBase} block>
          <Text style={styles.addButtonText}>{buttonText}</Text>
        </Button>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  addButtonView: {
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  addButtonBase: {
    backgroundColor: '#4169e1'
  },
  addButtonText: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13,
    alignSelf: 'center',
    color: '#ffffff',
    backgroundColor: '#4169e1'
  }
});
