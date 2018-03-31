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
    const { selected, icon, title } = this.props;
    return (
      <Button vertical onPress={this.props.onPress}>
        <Icon style={selected ? styles.tabSelectedColor : styles.tabDefaultColor} name={icon} />
        <Text style={selected ? styles.tabSelectedColor : styles.tabDefaultColor}>{title}</Text>
      </Button>
    );
  };
}

const styles = StyleSheet.create({
  tabDefaultColor: {
    color: '#999999',
  },
  tabSelectedColor: {
    color: '#4169e1'
  }
});