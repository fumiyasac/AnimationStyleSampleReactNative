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
  mailChanged,
  passwordChanged,
  loginUser,
  createUser
} from '../../../../../redux/actions';

// 認証コンテンツ用の共通コンポーネント
import AuthFormIntro from './AuthFormIntro';
import AuthFormInputMail from './AuthFormInputMail';
import AuthFormInputPassword from './AuthFormInputPassword';
import AuthFormErrorMessage from './AuthFormErrorMessage';
import AuthFormSubmitButton from './AuthFormSubmitButton';
import AuthFormSubmittingButton from './AuthFormSubmittingButton';

class AuthForm extends React.Component {

  // メールアドレスの入力値変更時の処理
  _onMailChange = (text) => {
    this.props.mailChanged(text);
  };

  // パスワードの入力値変更時の処理
  _onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  // ログインボタン押下時の処理
  _onPressLoginUserSubmitButton = () => {
    const { mail, password } = this.props;
    this.props.loginUser({ mail, password });
  };

  // ログインボタン表示処理
  _renderLoginUserButton = () => {
    if (this.props.loading) {
      return <AuthFormSubmittingButton buttonText={"既存ユーザー情報でログインする"} />;
    } else {
      return <AuthFormSubmitButton buttonText={"既存ユーザー情報でログインする"} onPressSubmitButton={ () => this._onPressLoginUserSubmitButton() } />;
    }
  };

  // 新規登録ボタン押下時の処理
  _onPressCreateUserSubmitButton = () => {
    const { mail, password } = this.props;
    this.props.createUser({ mail, password });
  };

  // 新規登録ボタン表示処理
  _renderCreateUserButton = () => {
    if (this.props.loading) {
      return <AuthFormSubmittingButton buttonText={"新規ユーザー情報を登録する"} />;
    } else {
      return <AuthFormSubmitButton buttonText={"新規ユーザー情報を登録する"} onPressSubmitButton={ () => this._onPressCreateUserSubmitButton() } />;
    }
  };

  render() {
    return (
      <Form>
        <AuthFormIntro />
        <AuthFormInputMail
          value={this.props.mail}
          onChangeText={ (mail) => this._onMailChange(mail) } 
          />
        <AuthFormInputPassword 
          value={this.props.password} 
          onChangeText={ (password) => this._onPasswordChange(password) } 
          />
        <AuthFormErrorMessage errorMessage={this.props.error} />
        {this._renderLoginUserButton()}
        {this._renderCreateUserButton()}
      </Form>
    );
  };
}

// ステートから値を取得してthis.propsにセットする
const mapStateToProps = ({ auth }) => {

  // 引数で受け取った認証データを変数に分解する
  const { mail, password, error, loading } = auth;

  // 分解したそれぞれの値をオブジェクトにして返却する
  return { mail, password, error, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { mailChanged, passwordChanged, loginUser, createUser })(AuthForm);
