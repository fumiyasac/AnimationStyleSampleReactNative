/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  Text,
  ListItem,
  Body
} from 'native-base';

export default class RecordListItem extends React.Component {
  render() {
    return (
      <ListItem>
        <Body>
          <Text style={styles.listItemGenre} note>日々の勉強</Text>
          <Text style={styles.listItemTitle}>ああああああああああああああああああああああああああああああああああああああああ</Text>
          <Text style={styles.listItemDetail} note>本当に短いデータでも大丈夫です。まずは今日取り組んだことを簡単な日報のように登録してみてください。</Text>
          <View style={styles.listItemLinkArea}>
            <TouchableOpacity>
              <Text style={styles.listItemLink} note>編集する</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.listItemLink} note>削除する</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  listItemGenre: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4169e1'
  },
  listItemTitle: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 'normal',
    color: '#333'
  },
  listItemDetail: {
    marginTop: 12,
    lineHeight: 18,
    fontSize: 13,
    marginBottom: 10,
    color: '#666',
  },
  listItemLinkArea: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  listItemLinkText: {
    lineHeight: 18,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
    textDecorationLine: 'underline'
  }
});
