/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// React-Reduxのインポート宣言 → ProviderタグでラップすることでReactコンポーネント内でStoreにアクセスできるようにする
import { Provider } from 'react-redux';

// createStore, applyMiddlewareのインポート宣言
import { createStore, applyMiddleware } from 'redux';

// redux-thunkのインポート宣言
import ReduxThunk from 'redux-thunk';

// react-native-router-fluxのインポート宣言(Router, Sceneを使用)
import { Router, Scene } from 'react-native-router-flux';

// reducerのインポート宣言
import reducers from './redux/reducers';

// 自作コンポーネント
import GlobalTabContents from './components/contents/GlobalTabContents';
import SettingContents from './components/contents/SettingContents';
import WebViewContents from './components/contents/WebViewContents';

export default class App extends React.Component {
  render() {
    // Redux本来のdispatch処理が実行される前にMiddlewareの処理を実行する
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="GlobalTabContents" initial={true} component={GlobalTabContents} hideNavBar={true} />
            <Scene key="SettingContents" component={SettingContents} hideNavBar={true} />
            <Scene key="WebViewContents" component={WebViewContents} hideNavBar={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
