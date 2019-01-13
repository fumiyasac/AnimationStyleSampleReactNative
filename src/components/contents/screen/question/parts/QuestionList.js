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
  Content
} from 'native-base';

// よくある質問コンテンツ用の共通コンポーネント
import QuestionListIntro from './QuestionListIntro';
import QuestionListItem from './QuestionListItem';

export default class QuestionList extends React.Component {

  // MARK: - Functions

  // 取得したよくある質問コンテンツ用データを表示する処理
  _displayQuestionList = () => {
    const { questionItems } = this.props;

    // よくある質問コンテンツ用データのリストを生成して表示する
    return questionItems.items.map( (item, index) => {
      return (
        <QuestionListItem key={index} item={item} />
      );
    });
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Content style={styles.container}>
        <QuestionListIntro />
        {this._displayQuestionList()}
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
