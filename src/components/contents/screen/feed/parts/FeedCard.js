/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
  Content,
  Card
} from 'native-base';

// フィード表示用のコンポーネント
import FeedCardItemHeader from './FeedCardItemHeader';
import FeedCardItemThumbnail from './FeedCardItemThumbnail';
import FeedCardItemDetail from './FeedCardItemDetail';
import FeedCardItemLikeCounter from './FeedCardItemLikeCounter';
import FeedCardItemCommentCounter from './FeedCardItemCommentCounter';
import FeedCardItemFooter from './FeedCardItemFooter';

export default class FeedCard extends React.Component {
  render() {
    const { feed, onPressLikeButton, onPressCommentButton, onPressReadModeButton } = this.props;
    const { title, subtitle, category, detail, image_url, created } = feed;
    return (
      <Content>
        <Card>
          <FeedCardItemHeader title={title} subtitle={subtitle} category={category} />
          <FeedCardItemThumbnail image_url={image_url} />
          <FeedCardItemDetail detail={detail} />
          <FeedCardItemLikeCounter counterTitle={"いいね数"} totalCount={123} onPressLikeButton={onPressLikeButton} />
          <FeedCardItemCommentCounter counterTitle={"応援メッセージ数"} totalCount={456} onPressLikeButton={onPressCommentButton} />
          <FeedCardItemFooter readMoreText={"この続きを読む"} createdDate={"2018.04.10"} onPressReadModeButton={onPressReadModeButton} />
        </Card>
      </Content>
    );
  };
}
