/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import FeedCard from './parts/FeedCard';

let feedSampleData = { 
  "feed": {
    "contents": [
      {
        "id": "1",
        "title": "タイトルが入ります。",
        "subtitle": "サブタイトルが入ります。",
        "category": "カテゴリーが入ります。",
        "detail": "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
        "image_url" : "https://otsuka-shop.s3-ap-northeast-1.amazonaws.com/shops/images/1/large.jpg",
        "created": "YYYY/MM/DD"
      }
    ]
  }
};

export default class FeedScreen extends React.Component {
  render() {
    return (
      <FeedCard feed={feedSampleData.feed.contents[0]}
        onPressLikeButton ={ () => { console.log("いいねボタン押下"); } }
        onPressCommentButton ={ () => { console.log("コメントボタン押下"); } }
        onPressReadModeButton ={ () => { console.log("詳細を読むボタン押下"); } }
        />
    );
  };
}
