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
  Header,
  Body,
  Title
} from 'native-base';

export default class GlobalHeader extends React.Component {
  render() {
    return (
      <Header iosBarStyle="light-content" style={styles.headerBackgroundColor} hasTabs>
        <Body>
          <Title style={styles.titleColor}>{this.props.title}</Title>
        </Body>
      </Header>
    );
  };
}

const styles = StyleSheet.create({
  headerBackgroundColor: {
    backgroundColor: '#4169e1',
  },
  titleColor: {
    color: '#ffffff',
  }
});