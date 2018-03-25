/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { 
  Container,
  Content
} from 'native-base';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// グローバルコンテンツ用の共通コンポーネント
import GlobalHeader from '../common/GlobalHeader';
import GlobalFooter from '../common/GlobalFooter';
import GlobalTab from '../common/GlobalTab';

// タブ表示用の要素
let tabBarItems = [
  { screen: "feed", title: "フィード", icon: "list" },
  { screen: "diary", title: "勉強日記", icon: "clipboard" },
  { screen: "record", title: "達成記録", icon: "medal" },
  { screen: "shopping", title: "お買い物", icon: "book" },
];

export default class GlobalTabContents extends React.Component {

  // コンストラクタ
  constructor(props) {
    super(props);

		// ステートの初期化を行う
		this.state = { isDrawerOpen: false, isDrawerDisabled: false, selectedIndex: 0 };
  };

	// タブのボタンを押下した際のイベント処理
  _onPressGlobalTab = (index) => {
		this.setState({ selectedIndex: index });
  };

	// タイトルを表示する
  _showTitle = (index) => {
		return tabBarItems[index].title;
	};

	// コンテンツを表示する
  _showContents = (index) => {};

	// タブのボタンを押下した際のイベント処理
  _renderGlobalTabs = () => {
		return tabBarItems.map( (tabBarItem, index) => {
			return (
				<GlobalTab 
					key={index}
					selected={this.state.selectedIndex === index}
					title={tabBarItem.title}
					icon={tabBarItem.icon}
					onPress={ () => this._onPressGlobalTab(index) } />
			);
		});
  }

	render() {
    return (
      <Container>
        <GlobalHeader title={this._showTitle(this.state.selectedIndex)} />
        <Content>
					{/* ここからコンテンツ表示用のComponentを入れる */}
					<View>
						<Text>{this.state.selectedIndex}</Text>
					</View>
					{/* ここまでコンテンツ表示用のComponentを入れる */}
				</Content>
        <GlobalFooter tabs={this._renderGlobalTabs()} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});