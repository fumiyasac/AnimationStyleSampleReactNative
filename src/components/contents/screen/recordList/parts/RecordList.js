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
  Content,
} from 'native-base';

import RecordListIntro from './RecordListIntro';
import RecordListAddButton from './RecordListAddButton';
import RecordListHeader from './RecordListHeader';
import RecordListLoading from './RecordListLoading';
import RecordListError from './RecordListError';
import RecordListNone from './RecordListNone';
import RecordListItem from './RecordListItem';

export default class RecordList extends React.Component {
  render() {
    return (
      <Content style={styles.container}>
        <RecordListIntro />
        <RecordListAddButton 
          buttonText={"勉強記録を新しく追加する"}
          onPressAddButton={ () => console.log("abc") } />
        <RecordListHeader />
        <RecordListLoading />
        <RecordListError />
        <RecordListNone />
        <RecordListItem />
      </Content>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
