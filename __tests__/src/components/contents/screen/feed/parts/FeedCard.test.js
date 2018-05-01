import 'react-native';
import React from 'react';
import FeedCard from '../../../../../../../src/components/contents/screen/feed/parts/FeedCard';

import renderer from 'react-test-renderer';

it('FeedCardコンポーネントが正しく表示されること', () => {

  let stubObject = { 
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

  const onPressLikeButtonMock = jest.fn();
  const onPressCommentButtonMock = jest.fn();
  const onPressReadModeButtonMock = jest.fn();

  const tree = renderer.create(
    <FeedCard feed={stubObject.feed.contents[0]}
      onPressLikeButton ={onPressLikeButtonMock()}
      onPressCommentButton ={onPressCommentButtonMock()}
      onPressReadModeButton ={onPressReadModeButtonMock()}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  