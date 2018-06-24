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
  Text
} from 'native-base';

export default class FeedCardItemDetail extends React.Component {

  // MARK: - Functions

  render() {
    const { detail } = this.props;
    return (
      <CardItem>
        <Text style={styles.detail}>{detail}</Text>
      </CardItem>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  detail: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 20
  }
});
