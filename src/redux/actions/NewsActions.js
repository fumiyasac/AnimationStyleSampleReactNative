/**
 * actions/index.js
 */

import { 
	NEWS_FETCH,
	NEWS_FETCH_SUCCESS,
	NEWS_FETCH_FAILURE
} from './types';

// ニュース情報取得開始時に実行されるメソッド
export const getAllNews = () => {
  return (dispatch) => {
    dispatch({ type: NEWS_FETCH });

		// Reducerへ渡すオブジェクトを作成する
 		// TODO: ...
  };
};

// ニュース情報取得成功時に実行されるメソッド
const fetchFeedSuccess = (dispatch, news) => {
  dispatch({ type: NEWS_FETCH_SUCCESS, payload: news });
};

// ニュース情報取得失敗時に実行されるメソッド
const fetchFeedFailure = (dispatch) => {
  dispatch({ type: NEWS_FETCH_FAILURE });
};
