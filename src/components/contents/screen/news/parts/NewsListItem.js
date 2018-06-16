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
  ListItem,
  Thumbnail,
  Body,
  Text
} from 'native-base';

export default class NewsListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem>
        <Thumbnail square size={85} source={require('../assets/news_sample.jpg')} />
        <Body>
          <Text style={styles.titleText}>{item.detail}</Text>
          <Text style={styles.noteText} note>{item.category} : {item.published}</Text>
        </Body>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    paddingLeft: 8,
    color: '#555'
  },
  noteText: {
    fontSize: 11,
    marginTop: 6,
    paddingLeft: 8,
    fontWeight: 'normal',
    color: '#aaa'
  }
});
