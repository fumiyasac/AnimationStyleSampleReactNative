/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Form,
  Item,
  Input,
  Label
} from 'native-base';

// 認証コンテンツ用の共通コンポーネント
import AuthFormIntro from './AuthFormIntro';
import AuthFormErrorMessage from './AuthFormErrorMessage';
import AuthFormSubmitButton from './AuthFormSubmitButton';

export default class AuthForm extends React.Component {
  render() {
    return (
      <Form>
        <AuthFormIntro />
        <Item stackedLabel last>
          <Label>ユーザー名:</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>パスワード:</Label>
          <Input />
        </Item>
        <AuthFormErrorMessage />
        <AuthFormSubmitButton />
      </Form>
    );
  };
}
