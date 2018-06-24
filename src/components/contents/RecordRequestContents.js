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

// connectのインポート宣言を行う
import { connect } from 'react-redux';

// ActionCreator(Actionの寄せ集め)のインポート宣言
// ※ (this.props.この中に定義したメソッド名) の形で実行できるようにする
import { 
  refreshRecord,
  titleChanged,
  contentChanged,
  uidChanged
} from '../../redux/actions';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// ページコンテンツ用の共通コンポーネント
import PageHeader from '../common/PageHeader';

// スクリーン表示用のコンポーネント
import CommonScreenContainer from '../common/CommonScreenContainer';
import RecordRequestScreen from './screen/recordRequest/RecordRequestScreen';

class RecordFormContents extends React.Component {

  // MARK: - Component Life Cycles

  // コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {

    // react-native-router-fluxのActions経由で引き渡されたパラメータがある場合はState(recordForm)に値を予め代入しておくかを決める
    // -----
    // ※ 引き渡される内容は下記の通り
    // targetUid: 新規追加時に自動で付与されるID
    // targetTitle: 選択されたIDに紐づくタイトルデータ
    // targetContent: 選択されたIDに紐づく本文データ
    // → データの更新を行う場合と新規登録の場合に分けている
    const { targetUid, targetTitle, targetContent } = this.props;

    // 新規追加時に自動で付与されるIDがある場合は「データの更新処理」とみなし、State(recordForm)に受け取った値を格納する
    if (targetUid) {
      this.props.uidChanged(targetUid);
      this.props.titleChanged(targetTitle);
      this.props.contentChanged(targetContent);
    
    // 新規追加時に自動で付与されるIDがない場合は「データの新規追加処理」とみなし、State(recordForm)初期値を格納する
    } else {
      this.props.refreshRecord();
    }
  }

  // MARK: - Functions

  // ヘッダーの戻るボタンを押下した際の処理
  _onPressBackButton = () => {
    Actions.pop();
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Container style={styles.container}>
        <PageHeader title={"記録を編集する"} onPressBackButton={ () => this._onPressBackButton() } />
        <CommonScreenContainer screen={<RecordRequestScreen />} />
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

// ステートから値を取得してthis.propsにセットする
const mapStateToProps = ({ recordForm }) => {

  // 引数で受け取った認証データを変数に分解する
  const { uid, title, content, error, loading } = recordForm;

  // 分解したそれぞれの値をオブジェクトにして返却する
  return { uid, title, content, error, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { 
  refreshRecord,
  titleChanged,
  contentChanged,
  uidChanged
})(RecordFormContents);
