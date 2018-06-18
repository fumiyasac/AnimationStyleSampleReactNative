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
  CardItem,
  Left,
  Right,
  Text
} from 'native-base';

export default class FeedCardItemHeader extends React.Component {
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
