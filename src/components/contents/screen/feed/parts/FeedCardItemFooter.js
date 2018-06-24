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
  CardItem,
  Left,
  Text
} from 'native-base';

export default class FeedCardItemHeader extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { createdDate } = this.props;
    return (
      <CardItem style={styles.cardFooter}>
        <Left>
          <Text style={styles.createdDateText}>{createdDate}</Text>
        </Left>
      </CardItem>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  cardFooter: {
    marginTop: 8,
    marginBottom: 12,    
  },
  createdDateText: {
    color: '#999999',
    marginLeft: 0,
    fontSize: 13
  }
});
