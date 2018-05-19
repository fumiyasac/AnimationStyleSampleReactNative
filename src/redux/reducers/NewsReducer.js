/**
 * reducers/NewsReducer.js
 */

import {
  NEWS_FETCH,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILURE 
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { news: null, error: '', loading: false };

// 選択されたケースを元にstateの更新を行うメソッド
export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCH:
      return { ...state, loading: true, error: '' };
    case NEWS_FETCH_SUCCESS:
      return { ...state, feed: action.payload };
    case NEWS_FETCH_FAILURE:
      return { ...state, error: 'ニュース情報の取得に失敗しました。', loading: false };
    default:
      return state;
  }
};