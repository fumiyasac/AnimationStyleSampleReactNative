
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Separator,
  Text
} from 'native-base';

export default class RecordListHeader extends React.Component {
  render() {
    return (
      <Separator bordered>
        <Text>これまでの記録一覧</Text>
      </Separator>
    );
  };
}
