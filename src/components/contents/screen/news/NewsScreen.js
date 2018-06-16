/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// 新着のお知らせ用の共通コンポーネント
import NewsList from './parts/NewsList';

export default class NewsScreen extends React.Component {
  render() {
    return (
      <NewsList />
    );
  };
}
