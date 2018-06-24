
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
  View,
  Textarea,
  Label
} from 'native-base';

export default class AuthFormInputContent extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { value, onChangeText } = this.props;
    return (
      <View style={styles.wrapper}>
        <Label style={styles.title}>本文:</Label>
        <Textarea
          bordered
          style={styles.textarea}
          rowSpan={5}
          value={value}
          placeholder="例）今日は合計8時間ぐらい時間が確保できたので、得意な数学・英語・化学を勉強したぞ！いつもこんな感じで継続できればなぁ..."
          onChangeText={onChangeText}
        />
      </View>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  wrapper: {
    padding: 16
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333"
  },
  textarea: {
    marginTop: 8,
    fontSize: 13,
    color: "#666666"
  }
});
