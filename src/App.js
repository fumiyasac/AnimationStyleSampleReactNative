/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// react-native-router-fluxのインポート宣言(Router, Sceneを使用)
import { Router, Scene } from 'react-native-router-flux';

// 自作コンポーネント
import GlobalTabContents from './components/contents/GlobalTabContents';
import SettingContents from './components/contents/SettingContents';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="GlobalTabContents" initial={true} component={GlobalTabContents} hideNavBar={true} />
          <Scene key="SettingContents" component={SettingContents} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
