
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// 設定コンテンツ用の共通コンポーネント
import RecordForm from './parts/RecordForm';

export default class RecordRequestScreen extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <RecordForm />
    );
  };
}
