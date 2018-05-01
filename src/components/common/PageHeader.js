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
  Title,
  Button,
  Icon
} from 'native-base';

export default class PageHeader extends React.Component {
  render() {
    const { title, onPressBackButton } = this.props;
    return (
      <Header iosBarStyle="light-content" style={styles.headerBackgroundColor} hasTabs>
        <Left>
          <Button transparent onPress={onPressBackButton}>
            <Icon style={styles.buttonColor} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.titleColor}>{title}</Title>
        </Body>
        <Right />
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
  },
  buttonColor: {
    color: '#ffffff'
  }
});