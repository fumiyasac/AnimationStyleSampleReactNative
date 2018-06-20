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

// 認証コンテンツ用の共通コンポーネント
import AuthHeader from '../common/AuthHeader';

// スクリーン表示用のコンポーネント
import CommonScreenContainer from '../common/CommonScreenContainer';
import AuthScreen from './screen/auth/AuthScreen';

export default class AuthContents extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <AuthHeader title={"登録・認証"} />
        <CommonScreenContainer screen={<AuthScreen />} />
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
