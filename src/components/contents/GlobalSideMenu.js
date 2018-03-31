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
  Container,
  Content
} from 'native-base';

// グローバルコンテンツ用の共通コンポーネント
import GlobalSideHeader from '../common/GlobalSideHeader';
import GlobalSideList from '../common/GlobalSideList';
import GlobalSideListItem from '../common/GlobalSideListItem';

let drawerMainItems = {
  "headerTitle": "メニュー",
  "items": [
    { title: "フィード", selectedIndex: 0 },
    { title: "勉強日記", selectedIndex: 1 },
    { title: "達成記録", selectedIndex: 2 },
    { title: "お買い物", selectedIndex: 3 },
    { title: "お問い合わせ", selectedIndex: 4 }
  ]
};

let drawerSubItems = {
  "headerTitle": "その他コンテンツ",
  "items": [
    { title: "よくある質問", selectedIndex: 0 },
    { title: "アプリの想い", selectedIndex: 0 }
  ]
};

export default class GlobalSideMenu extends React.Component {

  // メニューのリスト一覧を表示する
  _showDrawerMainItems = () => {
    const { updateContentsFromDrawer } = this.props;
    return drawerMainItems.items.map( (item, index) => {
      return (
        <GlobalSideListItem 
          key={index}
          title={item.title}
          onPressListItem={ () => updateContentsFromDrawer(item.selectedIndex) } />
      );
    });
  };

  // その他コンテンツのリスト一覧を表示する
  _showDrawerSubItems = () => {
    const { updateContentsFromDrawer } = this.props;
    return drawerSubItems.items.map( (item, index) => {
      return (
        <GlobalSideListItem 
          key={index}
          title={item.title}
          onPressListItem={ () => updateContentsFromDrawer(item.selectedIndex) } />
      );
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <GlobalSideHeader />
          <GlobalSideList headerTitle={drawerMainItems.headerTitle} listItems={this._showDrawerMainItems()} />
          <GlobalSideList headerTitle={drawerSubItems.headerTitle} listItems={this._showDrawerSubItems()} />
        </Content>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
