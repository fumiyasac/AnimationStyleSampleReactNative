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

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// ActionCreator(Actionの寄せ集め)のインポート宣言(this.props.この中に定義したメソッド名の形で実行)
import { getAllRecords } from '../../../../../redux/actions';

// 記録一覧コンテンツ用の共通コンポーネント
import RecordListIntro from './RecordListIntro';
import RecordListAddButton from './RecordListAddButton';
import RecordListHeader from './RecordListHeader';
import RecordListLoading from './RecordListLoading';
import RecordListNone from './RecordListNone';
import RecordListItem from './RecordListItem';

class RecordList extends React.Component {

  // MARK: - Component Life Cycles

  // コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    this.props.getAllRecords();
  }

  // MARK: - Functions

  // 再度取得する処理
  _onPressRetryButton = () => {
    this.props.getAllRecords();
  };

  // アイテムの新規追加ボタンを押下した際の処理
  _onPressAddButton = () => {
    Actions.RecordRequestContents();
  };

  // アイテムの更新・削除ボタンを押下した際の処理
  _onPressRequestButton = (uid, item) => {
    Actions.RecordRequestContents({ targetUid: uid, targetTitle: item.title, targetContent: item.content });
  };

    // 取得した記録データを表示する処理
  _displayRecordList = () => {
    const { recordList, loading } = this.props;

    // 最新のお知らせが取得中の場合における表示
    if (loading) {
      return (
        <RecordListLoading />
      );
    }

    // 記録データが0件の場合における表示
    if (recordList == null) {
      return (
        <RecordListNone />
      );
    }

    // 記録データ＆uidの一覧をそれぞれの配列に格納し直す
    var recordItems = [];
    var uidItems = [];
    for (let uid in recordList) {
      uidItems.push(uid);
      recordItems.push(recordList[uid]);
    }

    // 記録データのリストを生成して表示する
    return recordItems.map( (item, index) => {
      return (
        <RecordListItem 
          key={index}
          title={item.title}
          content={item.content}
          onPressRequestButton={ () => this._onPressRequestButton(uidItems[index], item) } />
      );
    });
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Content style={styles.container}>
        <RecordListIntro />
        <RecordListAddButton 
          buttonText={"勉強記録を新しく追加する"}
          onPressAddButton={ () => this._onPressAddButton() } />
        <RecordListHeader />
        {this._displayRecordList()}
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
const mapStateToProps = ({ records }) => {
  const { recordList, loading } = records;
  return { recordList, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { getAllRecords })(RecordList);
