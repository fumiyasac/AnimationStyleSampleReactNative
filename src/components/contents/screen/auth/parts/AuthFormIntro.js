
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Text
} from 'native-base';

export default class AuthFormIntro extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Firebase + NativeBase Sample</Text>
        <Text style={styles.comment} note>こちらはFirebaseとNativeBaseを組み合わせて作成したサンプルの事例になります。※お手元で動かす場合は、お使いの際にはご自身のFirebaseアカウント情報をご利用下さい。</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 14,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  comment: {
    padding: 10,
    fontSize: 13
  }
});
