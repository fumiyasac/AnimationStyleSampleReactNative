/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Content
} from 'native-base';

export default class GlobalContainer extends React.Component {
  render() {
    const { screen } = this.props;
    return (
      <Content>
        {screen}
      </Content>
    );
  };
}
