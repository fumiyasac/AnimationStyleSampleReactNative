/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// 設定コンテンツ用の共通コンポーネント
import AuthForm from './parts/AuthForm';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <AuthForm />
    );
  };
}
