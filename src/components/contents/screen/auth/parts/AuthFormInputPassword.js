
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import { 
  Item,
  Input,
  Label
} from 'native-base';

export default class AuthFormInputPassword extends React.Component {
  render() {
    const { value, onChangeText } = this.props;
    return (
      <Item stackedLabel last>
        <Label style={styles.title}>パスワード:</Label>
        <Input
          style={styles.input}
          secureTextEntry
          placeholder="例）●●●●●●●●"
          onChangeText={onChangeText}
        />
      </Item>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333"
  },
  input: {
    fontSize: 13,
    color: "#666666"
  }
});
