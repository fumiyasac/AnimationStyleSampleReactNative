/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet
} from 'react-native';

// 幅と高さをデバイスから取得する
const {
  width: DEVICE_WIDTH,
} = Dimensions.get('window');
const containerHeaderWidth = DEVICE_WIDTH - 80;
const containerHeaderHeight = 180;

export default class GlobalSideHeader extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <ImageBackground source={require('../assets/side_menu.jpg')} style={styles.containerHeader}>
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>勉強アプリboilerPlate</Text>
        </View>
      </ImageBackground>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  containerHeader: {
    width: containerHeaderWidth,
    height: containerHeaderHeight,
    backgroundColor: '#f5fcff',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  overlayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});
