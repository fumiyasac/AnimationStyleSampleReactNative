/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  List
} from 'native-base';

import SettingListItem from './SettingListItem';

export default class SettingList extends React.Component {
  render() {
    const { settingItems } = this.props;
    return (
      <List dataArray={settingItems.items} renderRow={ (item) =>
        <SettingListItem title={item.title} onPressListItem={item.onPressListItem} />
      } />
    );
  };
}
