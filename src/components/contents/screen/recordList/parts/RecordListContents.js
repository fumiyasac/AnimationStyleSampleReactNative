
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
  Left,
  Body,
  ListItem,
  Thumbnail,
  Text
} from 'native-base';

export default class RecordListIntro extends React.Component {
  render() {
    return (
      <ListItem>
        <Body>
          <Text style={styles.title}>勉強記録をつけよう</Text>
          <Text style={styles.comment} note>毎日の勉強を記録することで、立派な習慣の積み重ねと次の一手を考えるための立派なデータになります。毎日の少しずつの記録から自分なりの勉強を継続するための戦略を見出していくようにしましょう！</Text>
        </Body>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 6,
    fontSize: 14,
    fontWeight: 'bold'
  },
  comment: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13
  }
});
