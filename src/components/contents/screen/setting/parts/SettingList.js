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
  Content,
  List
} from 'native-base';

// 設定コンテンツ用の共通コンポーネント
import SettingListIntro from './SettingListIntro';
import SettingListItem from './SettingListItem';

export default class SettingList extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { settingItems } = this.props;
    return (
      <Content style={styles.container}>
        <SettingListIntro />
        <List dataArray={settingItems.items} renderRow={ (item) =>
          <SettingListItem title={item.title} onPressListItem={item.onPressListItem} />
        } />
      </Content>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
