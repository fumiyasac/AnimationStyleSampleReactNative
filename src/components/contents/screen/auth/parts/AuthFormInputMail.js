
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

export default class AuthFormInputMail extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { value, onChangeText } = this.props;
    return (
      <Item stackedLabel last>
        <Label style={styles.title}>メールアドレス:</Label>
        <Input
          style={styles.input}
          value={value}
          placeholder="例）username@example.com"
          onChangeText={onChangeText}
        />
      </Item>
    );
  };
}

// MARK: - Component Styles

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
