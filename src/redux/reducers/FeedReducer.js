/**
 * reducers/FeedReducer.js
 * フィード情報の取得状態を管理するためのReducer
 * → 定義されたAction経由で実行されるState(feed)に関する処理に関するロジックを定義する
 */

// フィード情報関連のAction定義のインポート宣言
import {
  FEED_FETCH,
  FEED_FETCH_SUCCESS,
  FEED_FETCH_FAILURE 
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { feedList: null, error: '', loading: false };

// MARK: - Functions

// 選択されたケースを元にstateの更新を行うメソッド
export default (state = initialState, action) => {
  switch (action.type) {
    case FEED_FETCH:
      return { ...state, ...initialState, loading: true, error: '' };
    case FEED_FETCH_SUCCESS:
      return { ...state, ...initialState, feedList: action.payload };
    case FEED_FETCH_FAILURE:
      return { ...state, error: 'フィードの取得に失敗しました。', loading: false };
    default:
      return state;
  }
};