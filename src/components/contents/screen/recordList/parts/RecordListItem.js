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

  // MARK: - Rendering Components

  render() {
    const { title, content, onPressRequestButton } = this.props;
    return (
      <ListItem>
        <Body>
          <Text style={styles.listItemMark} note>サンプルデータ:</Text>
          <Text style={styles.listItemTitle}>{title}</Text>
          <Text style={styles.listItemContent} note>{content}</Text>
          <View style={styles.listItemLinkArea}>
            <TouchableOpacity onPress={onPressRequestButton}>
              <Text style={styles.listItemLink} note>編集または削除する</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </ListItem>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  listItemMark: {
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
  listItemContent: {
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
  listItemLink: {
    lineHeight: 18,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
    textDecorationLine: 'underline'
  }
});
