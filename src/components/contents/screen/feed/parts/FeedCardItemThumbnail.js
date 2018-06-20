/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import { 
  CardItem
} from 'native-base';

const {
  width: DEVICE_WIDTH
} = Dimensions.get('window');

const imageAreaHeight = DEVICE_WIDTH * 0.6;

export default class FeedCardItemThumbnail extends React.Component {
  render() {
    return (
      <CardItem style={styles.cardImageWrapper} cardBody>
        <Image style={styles.cardImage} source={require('../assets/feed_sample.jpg')} />
      </CardItem>
    );
  };
}

const styles = StyleSheet.create({
  cardImageWrapper: {
    marginLeft: 12,
    marginRight: 12,   
  },
  cardImage: {
    width: null,
    height: imageAreaHeight,
    flex: 1
  }
});
