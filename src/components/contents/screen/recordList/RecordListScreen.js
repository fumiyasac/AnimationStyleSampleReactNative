/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// 記録データコンテンツ用の共通コンポーネント
import RecordList from './parts/RecordList';

export default class RecordListScreen extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <RecordList />
    );
  };
}
