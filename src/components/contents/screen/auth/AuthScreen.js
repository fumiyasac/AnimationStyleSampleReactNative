/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// 認証コンテンツの内容を表示するためのコンポーネント
import AuthForm from './parts/AuthForm';

export default class AuthScreen extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <AuthForm />
    );
  };
}
