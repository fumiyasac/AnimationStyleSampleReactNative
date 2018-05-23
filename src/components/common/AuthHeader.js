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
  Left,
  Right,
  Body,
  Title
} from 'native-base';

export default class AuthHeader extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Header iosBarStyle="light-content" style={styles.headerBackgroundColor} hasTabs>
        <Body>
          <Title style={styles.titleColor}>{title}</Title>
        </Body>
      </Header>
    );
  };
}

const styles = StyleSheet.create({
  headerBackgroundColor: {
    backgroundColor: '#4169e1'
  },
  titleColor: {
    color: '#ffffff'
  }
});