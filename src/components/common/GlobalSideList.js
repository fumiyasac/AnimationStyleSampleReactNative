/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  View
} from 'react-native';

import {
  Text,
  Separator
} from 'native-base';

export default class GlobalSideList extends React.Component {
  render() {
    const { headerTitle, listItems } = this.props;
    return (
      <View>
        <Separator bordered>
          <Text>{headerTitle}</Text>
        </Separator>
        {listItems}
      </View>
    );
  };
}
