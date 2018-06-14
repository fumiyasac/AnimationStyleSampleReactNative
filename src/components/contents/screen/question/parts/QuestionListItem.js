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
  ListItem,
  Body
} from 'native-base';

export default class QuestionListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem noBorder>
        <Body>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.comment} note>{item.content}</Text>
        </Body>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555555'
  },
  comment: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13
  }
});
