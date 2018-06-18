/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// 記録コンテンツ用の共通コンポーネント
import RecordList from './parts/RecordList';

export default class RecordListScreen extends React.Component {
  render() {
    return (
      <RecordList />
    );
  };
}
