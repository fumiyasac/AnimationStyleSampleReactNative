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

export default class FeedCardItemCommentCounter extends React.Component {
  render() {
    const { counterTitle, totalCount, onPressCommentButton } = this.props;
    return (
      <CardItem>
        <Left>
          <Icon style={styles.commentButtonIcon} name="chatbubbles" />
          <TouchableOpacity onPress={onPressCommentButton}>
            <Text style={styles.commentButtonText}>{counterTitle}: {totalCount}件</Text>
          </TouchableOpacity>
        </Left>
      </CardItem>
    );
  };
}

const styles = StyleSheet.create({
  commentButtonIcon: {
    fontSize: 16,
    color: '#ffc125'
  },
  commentButtonText: {
    marginTop: -2,
    fontSize: 13,
    color: '#ffc125',
    marginLeft: 8
  }
});
