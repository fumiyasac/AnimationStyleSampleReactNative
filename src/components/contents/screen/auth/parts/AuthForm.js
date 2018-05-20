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
import { emailChanged, passwordChanged, loginUser } from '../../../../../redux/actions';

// 認証コンテンツ用の共通コンポーネント
import AuthFormIntro from './AuthFormIntro';
import AuthFormInputMail from './AuthFormInputMail';
import AuthFormInputPassword from './AuthFormInputPassword';
import AuthFormErrorMessage from './AuthFormErrorMessage';
import AuthFormSubmitButton from './AuthFormSubmitButton';
import AuthFormSubmittingButton from './AuthFormSubmittingButton';

class AuthForm extends React.Component {

  _onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  _onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };
  
  _onPressSubmitButton = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };
  
  _renderButton = () => {
    if (this.props.loading) {
      return <AuthFormSubmittingButton />;
    } else {
      return <AuthFormSubmitButton onPressSubmitButton={ () => this._onPressSubmitButton() } />;
    }
  };

  render() {
    return (
      <Form>
        <AuthFormIntro />
        <AuthFormInputMail
          value={this.props.email}
          onChangeText={ (email) => this._onEmailChange(email) } 
          />
        <AuthFormInputPassword 
          value={this.props.password} 
          onChangeText={ (password) => this._onPasswordChange(password) } 
          />
        <AuthFormErrorMessage errorMessage={this.props.error} />
        {this._renderButton()}
      </Form>
    );
  };
}

// ステートから値を取得してthis.propsにセットする
const mapStateToProps = ({ auth }) => {

  // 引数で受け取った認証データを変数に分解する
  const { email, password, error, loading } = auth;

  // 分解したそれぞれの値をオブジェクトにして返却する
  return { email, password, error, loading };
};

// インポート可能にする宣言
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(AuthForm);
