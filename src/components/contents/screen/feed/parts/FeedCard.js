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
import FeedCardItemFooter from './FeedCardItemFooter';

export default class FeedCard extends React.Component {

  // MARK: - Functions

  render() {
    const { feed } = this.props;
    const { title, subtitle, category, detail, created } = feed;
    return (
      <Content>
        <Card>
          <FeedCardItemHeader title={title} subtitle={subtitle} category={category} />
          <FeedCardItemThumbnail />
          <FeedCardItemDetail detail={detail} />
          <FeedCardItemFooter createdDate={created} />
        </Card>
      </Content>
    );
  };
}
