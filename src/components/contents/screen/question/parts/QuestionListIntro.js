
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
  Text
} from 'native-base';

export default class QuestionListIntro extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <View>
        <Text style={styles.title}>このサンプルの利用について</Text>
        <Text style={styles.comment} note>このサンプルを利用する際の注意事項等を記載しています。とはいっても免責事項みたいなものはないのでお気軽にどうぞ！</Text>
      </View>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  title: {
    paddingTop: 14,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  comment: {
    padding: 10,
    fontSize: 13
  }
});
