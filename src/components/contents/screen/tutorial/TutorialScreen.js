/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// チュートリアルコンテンツ用の共通コンポーネント
import TutorialCard from './parts/TutorialCard';

let tutorialContentsData = [
  {
    key: 'tutorial1',
    title: '勉強記録をしっかり記録',
    titleStyle: {
      color: '#fff'
    },
    image: require('./assets/tutorial1.jpg'),
    imageStyle: {
      width: 260,
      height: 260,
      borderRadius: 130,
    },
    backgroundColor: '#ddd',
  },
  {
    key: 'tutorial2',
    title: '無理なく＆無駄なく',
    titleStyle: {
      color: '#fff'
    },
    image: require('./assets/tutorial2.jpg'),
    imageStyle: {
      width: 260,
      height: 260,
      borderRadius: 130,
    },
    backgroundColor: '#ddd',
  },
  {
    key: 'tutorial3',
    title: '書籍や参考書を活用',
    titleStyle: {
      color: '#fff'
    },
    image: require('./assets/tutorial3.jpg'),
    imageStyle: {
      width: 260,
      height: 260,
      borderRadius: 130,
    },
    backgroundColor: '#ddd',
  }
];

export default class TutorialScreen extends React.Component {
  render() {
    return (
      <TutorialCard tutorialContentsData={tutorialContentsData} />
    );
  };
}
