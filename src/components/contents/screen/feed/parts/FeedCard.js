/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { 
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Right,
  Text,
  Icon,
  Thumbnail
} from 'native-base';

const {
  width: DEVICE_WIDTH
} = Dimensions.get('window');

const imageAreaHeight = DEVICE_WIDTH * 0.6;

export default class FeedCard extends React.Component {
  render() {
    const { feed, onPressLikeButton, onPressCommentButton, onPressReadModeButton } = this.props;
    const { title, subtitle, category, detail, image_url, created } = feed;
    return (
      <Content>
        <Card>
          {/* Header */}
          <CardItem>
            <Body>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle} note>{subtitle}</Text>
              <Text style={styles.category} note>{category}</Text>
            </Body>
          </CardItem>
          {/* Thumbnail */}
          <CardItem style={styles.cardImageWrapper} cardBody>
            <Image style={styles.cardImage} source={ { uri: image_url } } />
          </CardItem>
          {/* Detail */}
          <CardItem>
            <Text style={styles.detail}>{detail}</Text>
          </CardItem>
          {/* Footer */}
          <CardItem style={styles.cardFooter}>
            <Left>
              <Text style={styles.dayText}>{created}</Text>
            </Left>
            <Body>
              <View style={styles.centerBase}>
                <Button transparent onPress={onPressLikeButton}>
                  <View style={styles.buttonBase}>
                    <Icon style={styles.heartButtonIcon} name="heart" />
                    <Text style={styles.heartButtonText}>123</Text>
                  </View>
                </Button>
                <Button transparent onPress={onPressCommentButton}>
                  <View style={styles.buttonBase}>
                    <Icon style={styles.commentButtonIcon} name="chatbubbles" />
                    <Text style={styles.commentButtonText}>456</Text>
                  </View>
                </Button>
              </View>
            </Body>
            <Right>
              <View style={styles.rightBase}>
                <TouchableOpacity onPress={onPressReadModeButton}>
                  <Text style={styles.readmoreText}>続きを読む</Text>
                </TouchableOpacity>
              </View>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: 4,
    marginTop: 8,
    fontSize: 12
  },
  category: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 12
  },
  cardImageWrapper: {
    marginLeft: 12,
    marginRight: 12,   
  },
  cardImage: {
    width: null,
    height: imageAreaHeight,
    flex: 1
  },
  detail: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 20
  },
  cardFooter: {
    marginTop: -16
  },
  centerBase: {
    flexDirection: 'row'
  },
  dayText: {
    color: '#999999',
    marginLeft: 0,
    fontSize: 13
  },
  buttonBase: {
    flexDirection: 'row'
  },
  heartButtonIcon: {
    color: '#f08080'
  },
  heartButtonText: {
    fontSize: 13,
    color: '#f08080',
    marginTop: 2,
    marginLeft: -10
  },
  commentButtonIcon: {
    color: '#ffc125'
  },
  commentButtonText: {
    fontSize: 13,
    color: '#ffc125',
    marginTop: 2,
    marginLeft: -10
  },
  rightBase: {
    flexDirection: 'row'
  },
  readmoreText: {
    textAlign: 'right',
    color: '#999999',
    marginLeft: 0,
    fontSize: 13,
    textDecorationLine: 'underline'
  }
});
