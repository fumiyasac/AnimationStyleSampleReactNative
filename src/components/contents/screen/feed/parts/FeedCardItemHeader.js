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
  Body,
  Text
} from 'native-base';

export default class FeedCardItemHeader extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { title, subtitle, category } = this.props;
    return (
      <CardItem>
        <Body>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle} note>{subtitle}</Text>
          <Text style={styles.category} note>{category}</Text>
        </Body>
      </CardItem>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  title: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: 4,
    marginTop: 8,
    fontSize: 12
  },
  category: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 12,
    fontWeight: "bold"
  },
});
