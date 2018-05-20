/**
 * actions/FeedActions.js
 */

import { 
	FEED_FETCH,
	FEED_FETCH_SUCCESS,
	FEED_FETCH_FAILURE
} from './types';

// フィード情報取得開始時に実行されるメソッド
export const getAllFeed = () => {
  return (dispatch) => {
    dispatch({ type: FEED_FETCH });

		// Reducerへ渡すオブジェクトを作成する
 		// TODO: ...
  };
};

// フィード情報取得成功時に実行されるメソッド
const fetchFeedSuccess = (dispatch, feed) => {
  dispatch({ type: FEED_FETCH_SUCCESS, payload: feed });
};

// フィード情報取得失敗時に実行されるメソッド
const fetchFeedFailure = (dispatch) => {
  dispatch({ type: FEED_FETCH_FAILURE });
};
