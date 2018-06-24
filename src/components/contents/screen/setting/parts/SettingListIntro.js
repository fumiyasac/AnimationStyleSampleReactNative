
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
  Left,
  Body,
  ListItem,
  Thumbnail,
  Text
} from 'native-base';

export default class SettingListIntro extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <ListItem avatar noBorder>
        <Left>
          <Thumbnail source={require('../assets/avatar_fumiyasac.jpg')} />
        </Left>
        <Body>
          <Text style={styles.title}>作者: fumiyasac</Text>
          <Text style={styles.comment} note>これまではデザイナー → サーバーサイドエンジニア → iOSやReactNative等をするようになったこともあって、UI周りの実装に関するTIPS等を僭越ながら取り組んだり登壇したりしています。</Text>
        </Body>
      </ListItem>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  title: {
    paddingTop: 6,
    fontSize: 14,
    fontWeight: 'bold'
  },
  comment: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 13
  }
});
