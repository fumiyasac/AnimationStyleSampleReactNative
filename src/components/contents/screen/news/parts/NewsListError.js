/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import {
  Text
} from 'native-base';

export default class NewsListError extends React.Component {
  render() {
    const { error, onPressRetryButton } = this.props;
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.errorTitle}>{error}</Text>
        <View>
          <TouchableOpacity onPress={onPressRetryButton}>
            <Text style={styles.errorButtonText}>再度データを取得する</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  errorWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorTitle: {
    marginTop: 20,
    fontSize: 13,
    textAlign: 'center',
    color: '#ff0000'
  },
  errorButtonText: {
    marginTop: 12,
    fontSize: 13,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666',
    textDecorationLine: 'underline'
  }
});
