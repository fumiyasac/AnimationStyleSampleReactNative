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
  Button,
  Icon,
  Text
} from 'native-base';

export default class GlobalTab extends React.Component {
  render() {
    return (
      <Button vertical onPress={this.props.onPress}>
        <Icon style={this.props.selected ? styles.tabSelectedColor : styles.tabDefaultColor} name={this.props.icon} />
        <Text style={this.props.selected ? styles.tabSelectedColor : styles.tabDefaultColor}>{this.props.title}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  tabDefaultColor: {
    color: '#999999',
  },
  tabSelectedColor: {
    color: '#4169e1'
  }
});