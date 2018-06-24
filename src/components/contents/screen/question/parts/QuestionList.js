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
  Content,
  List
} from 'native-base';

// よくある質問コンテンツ用の共通コンポーネント
import QuestionListIntro from './QuestionListIntro';
import QuestionListItem from './QuestionListItem';

export default class QuestionList extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { questionItems } = this.props;
    return (
      <Content style={styles.container}>
        <QuestionListIntro />
        <List dataArray={questionItems.items} renderRow={ (item) =>
          <QuestionListItem item={item} />
        } />
      </Content>
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
