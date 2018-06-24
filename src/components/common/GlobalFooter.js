/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Footer,
  FooterTab
} from 'native-base';

export default class GlobalFooter extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { tabs } = this.props;
    return (
      <Footer>
        <FooterTab>
          {tabs}
        </FooterTab>
      </Footer>
    );
  };
}
