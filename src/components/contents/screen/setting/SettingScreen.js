/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// 設定コンテンツ用の共通コンポーネント
import SettingList from './parts/SettingList';

// 設定コンテンツのリスト
let settingItems = {
  "items": [
    { title: "Twitter", onPressListItem: () => Actions.WebViewContents({ headerTitle: "Twitter", linkUrl: "https://twitter.com/fumiyasac" }) },
    { title: "Facebook", onPressListItem: () => Actions.WebViewContents({ headerTitle: "Facebook", linkUrl: "https://www.facebook.com/fumiya.sakai.37" }) },
    { title: "Github", onPressListItem: () => Actions.WebViewContents({ headerTitle: "Github", linkUrl: "https://github.com/fumiyasac" }) },
    { title: "Slideshare", onPressListItem: () => Actions.WebViewContents({ headerTitle: "Slideshare", linkUrl: "https://www.slideshare.net/fumiyasakai37/" }) },
    { title: "Qiita", onPressListItem: () => Actions.WebViewContents({ headerTitle: "Qiita", linkUrl: "https://qiita.com/fumiyasac@github" }) },
  ]
};

export default class SettingScreen extends React.Component {
  render() {
    return (
      <SettingList settingItems={settingItems} />
    );
  };
}
