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

// connectのインポート宣言を行う
import { connect } from 'react-redux';

// ActionCreator(Actionの寄せ集め)のインポート宣言(this.props.この中に定義したメソッド名の形で実行)
import {
  getAllNews
} from '../../../../../redux/actions';

// 新着のお知らせコンテンツ用の共通コンポーネント
import NewsListItem from './NewsListItem';
import NewsListLoading from './NewsListLoading';
import NewsListError from './NewsListError';

class NewsList extends React.Component {

  // MARK: - Component Life Cycles

  // コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    this.props.getAllNews();
  }

  // MARK: - Functions

  // 再度取得する処理
  _onPressRetryButton = () => {
    this.props.getAllNews();
  };

  // 取得したニュースデータを表示する処理
  _displayNewsList = () => {
    const { newsList, error, loading } = this.props;

    // 最新のお知らせが取得中の場合における表示
    if (loading) {
      return (
        <NewsListLoading />
      );
    }

    // 最新のお知らせが取得失敗の場合における表示
    if (error !== '') {
      return (
        <NewsListError 
          error={error}
          onPressRetryButton={ () => this._onPressRetryButton() } />
      );
    }

    // 最新のお知らせ情報を配列に格納し直す
    var newsItems = [];
    for (let index in newsList) {
      newsItems.push(newsList[index]);
    }

    // ニュースデータのリストを生成して表示する
    return newsItems.map( (item, index) => {
      return (
        <NewsListItem key={index} item={item} />
      );
    });
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Content style={styles.container}>
        {this._displayNewsList()}
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

// ステートから値を取得してthis.propsにセットする
const mapStateToProps = ({ news }) => {

  // 引数で受け取った認証データを変数に分解する
  const { newsList, error, loading } = news;

  // 分解したそれぞれの値をオブジェクトにして返却する
  return { newsList, error, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { getAllNews })(NewsList);
