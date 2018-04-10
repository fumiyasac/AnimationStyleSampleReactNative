/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { 
  CardItem,
  Left,
  Text,
  Icon
} from 'native-base';

export default class FeedCardItemLikeCounter extends React.Component {
  render() {
    const { counterTitle, totalCount, onPressLikeButton } = this.props;
    return (
      <CardItem>
        <Left>
          <Icon style={styles.heartButtonIcon} name="heart" />
          <TouchableOpacity onPress={onPressLikeButton}>
            <Text style={styles.heartButtonText}>{counterTitle}: {totalCount}件</Text>
          </TouchableOpacity>
        </Left>
      </CardItem>
    );
  };
}

const styles = StyleSheet.create({
  heartButtonIcon: {
    fontSize: 16,
    color: '#f08080'
  },
  heartButtonText: {
    marginTop: -2,
    fontSize: 13,
    color: '#f08080',
    marginLeft: 8
  }
});
