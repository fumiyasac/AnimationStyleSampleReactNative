/**
 * reducers/NewsReducer.js
 *
 * 最新のお知らせ情報の取得状態を管理するためのReducer
 * → 定義されたAction経由で実行されるState(news)に関する処理に関するロジックを定義する
 */

// 最新のお知らせ情報のAction定義のインポート宣言
import {
  NEWS_FETCH,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILURE 
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { newsList: null, error: '', loading: false };

// MARK: - Functions

// 選択されたケースを元にstateの更新を行うメソッド
export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCH:
      return { ...state, ...initialState, loading: true };
    case NEWS_FETCH_SUCCESS:
      return { ...state, ...initialState, newsList: action.payload };
    case NEWS_FETCH_FAILURE:
      return { ...state, error: '新着お知らせの取得に失敗しました。', loading: false };
    default:
      return state;
  }
};