/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// よくある質問コンテンツ用の共通コンポーネント
import QuestionList from './parts/QuestionList';

// よくある質問コンテンツのリスト
let questionItems = {
  "items": [
    { 
      title: "Q. このサンプルに改変や改良をしても大丈夫ですか？", 
      content: "A. ご自分でデザインやアカウントが必要な部分を改変した上でご活用頂けましたら、特に問題はないかと思います。もし自分の環境で動かなかった等があればGithubのissue等へ記載をしていただければ幸いです。しかしながら回答によってはご対応が出来かねます場合があることも了承頂ければと思います。"
    },
    { 
      title: "Q. 本当にやっちゃっていいんですね？", 
      content: "A. 本当に大丈夫です。なんならデバッグやプルリクエストをお送り頂けますのならなおのこと嬉しいです。"
    }
  ]
};

export default class QuestionScreen extends React.Component {
  render() {
    return (
      <QuestionList questionItems={questionItems} />
    );
  };
}
