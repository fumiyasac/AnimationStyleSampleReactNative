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
  Text,
  ListItem
} from 'native-base';

export default class GlobalSideListItem extends React.Component {
  render() {
    const { title, onPressListItem } = this.props;
    return (
      <ListItem style={styles.sideListItem} onPress={onPressListItem} last>
        <Text style={styles.sideListItemTitle}>{title}</Text>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  sideListItem: {
    height: 50
  },
  sideListItemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555'
  }
});
