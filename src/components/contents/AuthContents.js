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

// 認証のコンテンツ表示用の共通コンポーネント
import AuthHeader from '../common/AuthHeader';

// 認証のスクリーン表示用のコンポーネント
import CommonScreenContainer from '../common/CommonScreenContainer';
import AuthScreen from './screen/auth/AuthScreen';

export default class AuthContents extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <Container style={styles.container}>
        <AuthHeader title={"登録・認証"} />
        <CommonScreenContainer screen={<AuthScreen />} />
      </Container>
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
