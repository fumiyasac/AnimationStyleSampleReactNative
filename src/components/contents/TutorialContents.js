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
import TutorialScreen from './screen/tutorial/TutorialScreen';

export default class TutorialContents extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <AuthHeader title={"ようこそ!"} />
        <TutorialScreen />
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
