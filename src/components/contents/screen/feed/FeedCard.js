/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { 
  Card
} from 'native-base';

export default class FeedCars extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <Text>{"テスト"}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
