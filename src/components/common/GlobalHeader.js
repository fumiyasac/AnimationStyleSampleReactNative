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

export default class GlobalHeader extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { title, onPressMenuButton, onPressSettingButton } = this.props;
    return (
      <Header iosBarStyle="light-content" style={styles.headerBackgroundColor} hasTabs>
        <Left>
          <Button transparent onPress={onPressMenuButton}>
            <Icon style={styles.buttonColor} name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.titleColor}>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={onPressSettingButton}>
            <Icon style={styles.buttonColor} name="settings" />
          </Button>
        </Right>
      </Header>
    );
  };
}

// MARK: - Component Styles

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