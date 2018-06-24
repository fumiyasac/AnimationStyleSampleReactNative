/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet
} from 'react-native';

import { 
  Button,
  Icon,
  Text
} from 'native-base';

export default class GlobalTab extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { selected, icon, title } = this.props;
    let deviceStyle = (Platform.OS === "ios") ? iosStyles : androidStyles;
    return (
      <Button vertical onPress={this.props.onPress}>
        <Icon style={selected ? deviceStyle.tabSelectedColor : deviceStyle.tabDefaultColor} name={icon} />
        <Text style={selected ? deviceStyle.tabSelectedColor : deviceStyle.tabDefaultColor}>{title}</Text>
      </Button>
    );
  };
}

// MARK: - Component Styles

const iosStyles = StyleSheet.create({
  tabDefaultColor: {
    color: '#999999',
  },
  tabSelectedColor: {
    color: '#4169e1'
  }
});

const androidStyles = StyleSheet.create({
  tabDefaultColor: {
    color: '#c6c6c6',
  },
  tabSelectedColor: {
    color: '#ffffff'
  }
});