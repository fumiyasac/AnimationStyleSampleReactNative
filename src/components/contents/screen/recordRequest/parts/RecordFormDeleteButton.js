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

export default class RecordListError extends React.Component {
  render() {
    const { onPressDeleteRecordButton } = this.props;
    return (
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity onPress={onPressDeleteRecordButton}>
            <Text style={styles.buttonText}>このデータを削除する</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  buttonText: {
    marginTop: 20,
    fontSize: 13,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666',
    textDecorationLine: 'underline'
  }
});
