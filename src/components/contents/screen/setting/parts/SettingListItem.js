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
  Text,
  Icon,
  ListItem
} from 'native-base';

export default class SettingListItem extends React.Component {

  _getSocialMediaColorCode = (title) => {
    switch (title) {
      case "Twitter":
        return colorStyles.twitterColor;
      case "Facebook":
        return colorStyles.facebookColor;
      case "Github":
        return colorStyles.githubColor;
      case "Slideshare":
        return colorStyles.slideshareColor;
      case "Qiita":
        return colorStyles.qiitaColor;
      default:
        return colorStyles.defaultColor;
    }
  };

  render() {
    const { title, onPressListItem } = this.props;
    return (
      <ListItem style={styles.listItem} onPress={onPressListItem}>
        <Icon style={[styles.listItemIcon, this._getSocialMediaColorCode(title)]} name="paper-plane" />
        <Text style={styles.listItemText}>{title}</Text>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  listItem: {
    height: 50
  },
  listItemIcon: {
    fontSize: 16,
  },
  listItemText: {
    fontSize: 13,
    paddingLeft: 8,
    fontWeight: 'normal',
    color: '#555555'
  }
});

const colorStyles = StyleSheet.create({
  twitterColor: {
    color: '#00aced',
  },
  facebookColor: {
    color: '#3b5998',
  },
  githubColor: {
    color: '#333333',
  },
  slideshareColor: {
    color: '#0077b5',
  },
  qiitaColor: {
    color: '#55c500',
  },
  defaultColor: {
    color: '#888888',
  }
});
