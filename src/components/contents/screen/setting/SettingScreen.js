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
  Container,
  Content
} from 'native-base';

// 設定コンテンツ用の共通コンポーネント
import SettingList from './parts/SettingList';

// 設定コンテンツのリスト
let settingItems = {
  "items": [
    { title: "設定コンテンツその1", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその2", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその3", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその4", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその5", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその6", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその7", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその8", onPressListItem: () => console.log("test") },
    { title: "設定コンテンツその9", onPressListItem: () => console.log("test") },
  ]
};

export default class SettingScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <SettingList settingItems={settingItems} />
        </Content>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
