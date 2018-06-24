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
  Container
} from 'native-base';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// ページコンテンツ用の共通コンポーネント
import PageHeader from '../common/PageHeader';

// スクリーン表示用のコンポーネント
import CommonScreenContainer from '../common/CommonScreenContainer';
import SettingScreen from './screen/setting/SettingScreen';

export default class SettingContents extends React.Component {

  // MARK: - Functions

  // ヘッダーの戻るボタンを押下した際の処理
  _onPressBackButton = () => {
    Actions.pop();
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Container style={styles.container}>
        <PageHeader title={"設定やその他"} onPressBackButton={ () => this._onPressBackButton() } />
        <CommonScreenContainer screen={<SettingScreen />} />
      </Container>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
});
