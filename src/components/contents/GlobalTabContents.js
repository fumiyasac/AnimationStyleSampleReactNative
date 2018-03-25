/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

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
	{ screen: "contact", title: "お問い合わせ", icon: "email" },
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
        return <FeedScreen />
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
		console.log("ヘッダーのメニューボタンを押下した際の処理");
	};

	// ヘッダーの設定ボタンを押下した際の処理
	_onPressSettingButton = () => {
		console.log("ヘッダーの設定ボタンを押下した際の処理");
	};

	// ドロワーメニューを閉じる際の処理
	_closeDrawer = (index) => {
		this.setState({ selectedIndex: index });
		this._drawer._root.close();
	};

	// ドロワーメニューを開く際の処理
	_openDrawer = () => {
		this._drawer._root.open();
	};

	render() {
    return (
      <Container>
				<GlobalHeader 
					title={this._showTitle(this.state.selectedIndex)}
					onPressMenuButton={this._onPressMenuButton()}
					onPressSettingButton={this._onPressSettingButton()} />
				<GlobalContainer screen={this._showContents(this.state.selectedIndex)} />
        <GlobalFooter tabs={this._showGlobalTabs()} />
      </Container>
    );
  };
}
