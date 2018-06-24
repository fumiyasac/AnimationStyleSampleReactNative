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

// チュートリアルのコンテンツ表示用の共通コンポーネント
import AuthHeader from '../common/AuthHeader';

// チュートリアルのスクリーン表示用のコンポーネント
import TutorialScreen from './screen/tutorial/TutorialScreen';

export default class TutorialContents extends React.Component {

  // MARK: - Rendering Components

  render() {
    return (
      <Container style={styles.container}>
        <AuthHeader title={"ようこそ!"} />
        <TutorialScreen />
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
