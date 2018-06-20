/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// connectのインポート宣言を行う
import { connect } from 'react-redux';

// ActionCreator(Actionの寄せ集め)のインポート宣言(this.props.この中に定義したメソッド名の形で実行)
import {
  getAllFeed
} from '../../../../redux/actions';

import FeedCard from './parts/FeedCard';
import FeedLoading from './parts/FeedLoading';
import FeedError from './parts/FeedError';

class FeedScreen extends React.Component {

  // コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    this.props.getAllFeed();
  }

  // 再度取得する処理
  _onPressRetryButton = () => {
    this.props.getAllFeed();
  };

  render() {
    const { feedList, error, loading } = this.props;

    // フィードが取得中の場合における表示
    if (loading) {
      return (
        <FeedLoading />
      );
    }

    // フィードが取得失敗の場合における表示
    if (error !== '') {
      return (
        <FeedError 
          error={error}
          onPressRetryButton={ () => this._onPressRetryButton() } />
      );
    }

    // フィードを配列に格納し直す
    var feedItems = [];
    for (let index in feedList) {
      feedItems.push(feedList[index]);
    }

    // フィードが取得成功の場合における表示
    return feedItems.map( (item, index) => {
      return (
        <FeedCard key={index} feed={item} />
      );
    });
  };
}

// ステートから値を取得してthis.propsにセットする
const mapStateToProps = ({ feed }) => {

  // 引数で受け取った認証データを変数に分解する
  const { feedList, error, loading } = feed;

  // 分解したそれぞれの値をオブジェクトにして返却する
  return { feedList, error, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { getAllFeed })(FeedScreen);
