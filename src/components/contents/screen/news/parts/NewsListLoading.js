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
  Spinner
} from 'native-base';

export default class NewsListLoading extends React.Component {
  render() {
    return (
      <View style={styles.loadingWrapper}>
        <Spinner color="#666" />
        <Text style={styles.loadingInnerText}>データ取得中...</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingInnerText: {
    paddingBottom: 20,
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
  }
});
