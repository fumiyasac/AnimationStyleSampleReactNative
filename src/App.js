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

// redux-loggerのインポート宣言
import logger from 'redux-logger';

// react-native-router-fluxのインポート宣言(Router, Sceneを使用)
import { Router, Scene } from 'react-native-router-flux';

// firebaseのインポート宣言を行う
import firebase from 'firebase';

// reducerのインポート宣言
import reducers from './redux/reducers';

// configのインポート宣言 ※config/index.jsを作成し下記を定義(Firebaseから持ってくる値)
import { 
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID 
} from './config';

// 自作コンポーネント
import TutorialContents from './components/contents/TutorialContents';
import AuthContents from './components/contents/AuthContents';
import GlobalTabContents from './components/contents/GlobalTabContents';
import RecordRequestContents from './components/contents/RecordRequestContents';
import SettingContents from './components/contents/SettingContents';
import WebViewContents from './components/contents/WebViewContents';

export default class App extends React.Component {
  // コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    // firebaseのセッティング情報を記載する
    // ※API情報に関してFirebaseコンソールを取得 → Authentication → 「ログイン方法」でメール/パスワードを有効にする
    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    };
    // firebaseを有効にする
    firebase.initializeApp(config);
  }

  render() {
    // Redux本来のdispatch処理が実行される前にMiddlewareの処理を実行する
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="auth">
              <Scene key="TutorialContents" initial={true} component={TutorialContents} hideNavBar={true} />
              <Scene key="AuthContents" component={AuthContents} hideNavBar={true} />
            </Scene>
            <Scene key="main">
              <Scene key="GlobalTabContents" initial={true} component={GlobalTabContents} hideNavBar={true} />
              <Scene key="RecordRequestContents" component={RecordRequestContents} hideNavBar={true} />
              <Scene key="SettingContents" component={SettingContents} hideNavBar={true} />
              <Scene key="WebViewContents" component={WebViewContents} hideNavBar={true} />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
