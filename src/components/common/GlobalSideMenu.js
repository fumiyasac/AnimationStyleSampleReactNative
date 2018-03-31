/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Container,
  Content,
  Button,
  Text,
  Header,
  Footer
} from 'native-base';

export default class GlobalSideMenu extends React.Component {
  render() {
    const { updateContentsFromDrawer } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <Button transparent onPress={ () => updateContentsFromDrawer(0) }>
            <Text>テスト(0)</Text>
          </Button>
          <Button transparent onPress={ () => updateContentsFromDrawer(1) }>
            <Text>テスト(1)</Text>
          </Button>
          <Button transparent onPress={ () => updateContentsFromDrawer(2) }>
            <Text>テスト(2)</Text>
          </Button>
          <Button transparent onPress={ () => updateContentsFromDrawer(3) }>
            <Text>テスト(3)</Text>
          </Button>
          <Button transparent onPress={ () => updateContentsFromDrawer(4) }>
            <Text>テスト(4)</Text>
          </Button>
        </Content>
        <Footer />
      </Container>
    );
  };
}
