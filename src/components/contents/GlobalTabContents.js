/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import {
  Drawer,
  Container
} from 'native-base';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// グローバルコンテンツ用の共通コンポーネント
import GlobalHeader from '../common/GlobalHeader';
import GlobalFooter from '../common/GlobalFooter';
import GlobalContainer from '../common/GlobalContainer';
import GlobalTab from '../common/GlobalTab';

// サイドメニュー用のコンポーネント
import GlobalSideMenu from './GlobalSideMenu';

// スクリーン表示用のコンポーネント
import FeedScreen from './screen/feed/FeedScreen';

// タブ表示用の要素
let screenItems = [
  // タブと連動した部分
  { screen: "feed", title: "フィード", icon: "list" },
  { screen: "diary", title: "勉強日記", icon: "clipboard" },
  { screen: "record", title: "達成記録", icon: "medal" },
  { screen: "shopping", title: "お買い物", icon: "book" },
  // ドロワーと連動した部分
  { screen: "information", title: "新着のお知らせ" },
  { screen: "contact", title: "お問い合わせ" },
  { screen: "question", title: "よくある質問" },
  { screen: "mind", title: "アプリの想い" },
  // グローバルメニューと連動した部分
  { screen: "setting", title: "設定" }
];

// タブまでのインデックス番号
let TAB_CONTENT_INDEX_LIMIT = 3;

export default class GlobalTabContents extends React.Component {

  // コンストラクタ
  constructor(props) {
    super(props);

    // ステートの初期化を行う
    this.state = { isDrawerOpen: false, isDrawerDisabled: false, selectedIndex: 0 };
  };

  // タイトルを表示する
  _showTitle = (index) => {
    return screenItems[index].title;
  };

  // コンテンツを表示する
  _showContents = (index) => {
    switch (index) {
      default:
        return (<FeedScreen />);
    }
  };

  // タブのボタンを表示する
  _showGlobalTabs = () => {
    return screenItems.map( (tabBarItem, index) => {
      if (index <= TAB_CONTENT_INDEX_LIMIT) {
        return (
          <GlobalTab 
            key={index}
            selected={this.state.selectedIndex === index}
            title={tabBarItem.title}
            icon={tabBarItem.icon}
            onPress={ () => this._onPressGlobalTab(index) } />
        );
      }
    });
  };

  // タブのボタンを押下した際の処理
  _onPressGlobalTab = (index) => {
    this.setState({ selectedIndex: index });
  };

  // ヘッダーのメニューボタンを押下した際の処理
  _onPressMenuButton = () => {
    // ドロワーメニューを開く
    this._drawer._root.open();
  };

  // ヘッダーの設定ボタンを押下した際の処理
  _onPressSettingButton = () => {
    // Debug.
    console.log("ヘッダーの設定ボタンを押下した際の処理");
  };

  // ドロワーメニュー経由でコンテンツを更新する際の処理
  _updateContentsFromDrawer = (index) => {
    this.setState({ selectedIndex: index });
    // Debug.
    console.log(this.state);
    // ドロワーメニューを閉じる
    this._drawer._root.close();
  };

  // ドロワーの開閉状態を変更する際の処理
  _updateDrawerOpenState = (result) => {
    this.setState({ isDrawerOpen: result });
    // Debug.
    console.log(this.state);
  };

  render() {
    const { selectedIndex, isDrawerDisabled } = this.state;
    /**
     * Memo:
     * NativeBaseのDrawerは下記のライブラリを拡張して作られている
     * (各種プロパティの参考) React Native Drawer
     * https://github.com/root-two/react-native-drawer#props
    */
    return (
      <Drawer
        ref={ (ref) => { this._drawer = ref; } }
        type={"overlay"}
        content={ 
          /* GlobalSideMenuコンポーネントで_updateContentsFromDrawerを実行できるようにする */
          <GlobalSideMenu updateContentsFromDrawer={this._updateContentsFromDrawer} />
        }
        onOpen={ () => this._updateDrawerOpenState(true) }
        onClose={ () => this._updateDrawerOpenState(false) }
        tweenHandler={ (ratio) => {
          return { mainOverlay: { opacity: ratio / 2, backgroundColor: 'black' }};
        } }
        captureGestures={true}
        tweenDuration={160}
        disabled={isDrawerDisabled}
        openDrawerOffset={ (viewport) => { return 80; } }
        side={"left"}
        closedDrawerOffset={ () => { return 0; } }
        panOpenMask={0.04}
        negotiatePan={true}
        >
        {/* 画面に表示している内容 */}
        <Container style={styles.container}>
          <GlobalHeader 
            title={this._showTitle(selectedIndex)}
            onPressMenuButton={ () => this._onPressMenuButton() }
            onPressSettingButton={ () => this._onPressSettingButton() } />
          <GlobalContainer screen={this._showContents(selectedIndex)} />
          <GlobalFooter tabs={this._showGlobalTabs()} />
        </Container>
      </Drawer>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
});
