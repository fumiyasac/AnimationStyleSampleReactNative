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
  Content
} from 'native-base';

// 設定コンテンツ用の共通コンポーネント
import SettingList from './parts/SettingList';

// 設定コンテンツのリスト
let settingItems = {
  "items": [
    { title: "Twitter", onPressListItem: () => console.log("Twitter") },
    { title: "Facebook", onPressListItem: () => console.log("Facebook") },
    { title: "Github", onPressListItem: () => console.log("Github") },
    { title: "Slideshare", onPressListItem: () => console.log("Slideshare") },
    { title: "Qiita", onPressListItem: () => console.log("Qiita") },
  ]
};

export default class SettingScreen extends React.Component {
  render() {
    return (
      <SettingList settingItems={settingItems} />
    );
  };
}
