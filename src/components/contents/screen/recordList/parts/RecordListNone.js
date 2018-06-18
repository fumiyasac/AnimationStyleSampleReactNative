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

export default class RecordListNone extends React.Component {
  render() {
    return (
      <View style={styles.noneWrapper}>
        <Text style={styles.noneTitle}>まだ記録が登録されていません。</Text>
        <View>
          <Text style={styles.noneText}>本当に短いデータでも大丈夫です。まずは今日取り組んだことを簡単な日報のように登録してみてください。</Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  noneWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noneTitle: {
    marginTop: 20,
    fontSize: 13,
    textAlign: 'center',
    color: '#666'
  },
  noneText: {
    paddingLeft: 18,
    paddingRight: 18,    
    marginTop: 12,
    lineHeight: 18,
    fontSize: 13,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666',
  }
});
