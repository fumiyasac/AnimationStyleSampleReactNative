
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

export default class RecordFormIntro extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <View>
        <Text style={styles.title}>ますはタイトルと本文を登録してみてください！</Text>
        <Text style={styles.comment} note>まずは気が付いたことや感想でも構いませんので簡単に取り組んだことやアイデアを自由に記録してみてください。</Text>
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
