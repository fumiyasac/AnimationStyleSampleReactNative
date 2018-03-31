/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Container,
  Content,
  Header,
  Footer
} from 'native-base';

export default class GlobalSideMenu extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          テスト
        </Content>
        <Footer />
      </Container>
    );
  };
}
