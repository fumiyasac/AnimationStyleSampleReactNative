/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Form
} from 'native-base';

// connectのインポート宣言を行う
import { connect } from 'react-redux';

// ActionCreator(Actionの寄せ集め)のインポート宣言(this.props.この中に定義したメソッド名の形で実行)
import { 
  titleChanged,
  contentChanged,
  createRecord,
  saveRecord,
  deleteRecord
} from '../../../../../redux/actions';

// 記録データ表示コンテンツ用の共通コンポーネント
import RecordFormIntro from './RecordFormIntro';
import RecordFormInputTitle from './RecordFormInputTitle';
import RecordFormInputContent from './RecordFormInputContent';
import RecordFormErrorMessage from './RecordFormErrorMessage';
import RecordFormSubmitButton from './RecordFormSubmitButton';
import RecordFormSubmittingButton from './RecordFormSubmittingButton';
import RecordFormDeleteButton from './RecordFormDeleteButton';

class RecordForm extends React.Component {

  // MARK: - Functions

  // タイトルの入力値変更時の処理
  _onTitleChange = (text) => {
    this.props.titleChanged(text);
  };

  // 本文の入力値変更時の処理
  _onContentChange = (text) => {
    this.props.contentChanged(text);
  };

  // 編集ボタン押下時の処理
  _onPressRequestRecordSubmitButton = () => {
    const { title, content, uid } = this.props;
    if (uid == null) {
      this.props.createRecord({ title, content });
    } else {
      this.props.saveRecord({ uid, title, content });
    }
  };

  // 削除ボタン押下時の処理
  _onPressDeleteRecordButton = () => {
    const { uid } = this.props;
    this.props.deleteRecord({ uid });
  };

  // 状態に応じた編集ボタン表示処理
  _renderRequestRecordButton = () => {
    if (this.props.loading) {
      return (
        <RecordFormSubmittingButton 
          buttonText={"データの編集を完了する"} />
      );
    } else {
      return (
        <RecordFormSubmitButton 
          buttonText={"データの編集を完了する"} 
          onPressSubmitButton={ () => this._onPressRequestRecordSubmitButton() } />
        );
    }
  };

  // 状態に応じた削除ボタン表示処理
  _renderDeleteRecordButton = () => {
    if (this.props.uid) {
      return (
        <RecordFormDeleteButton 
          onPressDeleteRecordButton={ () => this._onPressDeleteRecordButton() } />
      );
    } 
  };

  // MARK: - Rendering Components

  render() {
    return (
      <Form>
        <RecordFormIntro />
        <RecordFormInputTitle
          value={this.props.title}
          onChangeText={ (title) => this._onTitleChange(title) } 
          />
        <RecordFormInputContent 
          value={this.props.content} 
          onChangeText={ (content) => this._onContentChange(content) } 
          />
        <RecordFormErrorMessage errorMessage={this.props.error} />
        {this._renderRequestRecordButton()}
        {this._renderDeleteRecordButton()}
      </Form>
    );
  };
}

// ステートから値を取得してthis.propsにセットする
const mapStateToProps = ({ recordForm }) => {

  // 引数で受け取った認証データを変数に分解する
  const { uid, title, content, error, loading } = recordForm;

  // 分解したそれぞれの値をオブジェクトにして返却する
  return { uid, title, content, error, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { titleChanged, contentChanged, createRecord, saveRecord, deleteRecord })(RecordForm);
