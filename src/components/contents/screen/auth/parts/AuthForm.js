/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Form
} from 'native-base';

// 認証コンテンツ用の共通コンポーネント
import AuthFormIntro from './AuthFormIntro';
import AuthFormInputMail from './AuthFormInputMail';
import AuthFormInputPassword from './AuthFormInputPassword';
import AuthFormErrorMessage from './AuthFormErrorMessage';
import AuthFormSubmitButton from './AuthFormSubmitButton';
import AuthFormSubmittingButton from './AuthFormSubmittingButton';

export default class AuthForm extends React.Component {
  // TODO: Reduxとのマッピングを行う
  render() {
    return (
      <Form>
        <AuthFormIntro />
        <AuthFormInputMail
          value={""}
          onChangeText={ (email) => { console.log(email); } } 
          />
        <AuthFormInputPassword 
          value={""} 
          onChangeText={ (password) => { console.log(password); } } 
          />
        <AuthFormErrorMessage errorMessage={"処理エラーが発生しました。"} />
        <AuthFormSubmitButton onPressSubmitButton={ () => { console.log("認証ボタン押下"); } } />
      </Form>
    );
  };
}
