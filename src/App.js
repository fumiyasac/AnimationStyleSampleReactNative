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
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge
} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        {/* TODO: ヘッダー部分のコンポーネントの作成 */}
        <Header />
        {/* TODO: コンテンツ部分のコンポーネントの作成 */}
        <Content />
        {/* TODO: フッター部分のコンポーネントの整理＆切り出し */}
        {/* --- ↓ここから↓ --- */}
        <Footer>
          <FooterTab>
            <Button vertical onPress={ () => console.log("test1") }>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={ () => console.log("test2") }>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical onPress={ () => console.log("test3") }>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical onPress={ () => console.log("test4") }>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        {/* --- ↑ここまで↑ --- */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
