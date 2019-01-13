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
import SettingListIntro from './SettingListIntro';
import SettingListItem from './SettingListItem';

export default class SettingList extends React.Component {

  // MARK: - Functions

  // 取得した設定コンテンツ用データを表示する処理
  _displaySettingList = () => {
    const { settingItems } = this.props;

    // 設定コンテンツ用データのリストを生成して表示する
    return settingItems.items.map( (item, index) => {
      return (
        <SettingListItem 
          key={index}
          title={item.title}
          onPressListItem={item.onPressListItem} />
      );
    });
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Content style={styles.container}>
        <SettingListIntro />
        {this._displaySettingList()}
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
