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

export default class NewsListError extends React.Component {
  render() {
    const { error, onPressRetryButton } = this.props;
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.errorTitle}>{error}</Text>
        <View>
          <Button style={styles.errorButton} onPress={onPressRetryButton}>
            <Text style={styles.errorButtonText}>再度データを取得する</Text>
          </Button>
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
    color: '#666'
  },
  errorButton: {
    marginTop: 12,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#4169e1'
  },
  errorButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }
});
