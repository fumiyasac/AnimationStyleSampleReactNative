/**
 * reducers/index.js
 * 
 * データ表示で使用するReducerの定義（アプリケーションのステート一覧に関するもの）
 * Reduxの原則の1つであるグローバルな状態ツリーがすべてのソースとなるが、一部を更新するような形がほとんどなので役割に応じてReducerを分割する。
 */

import { combineReducers } from 'redux';

import NewsReducer from './NewsReducer';
import FeedReducer from './FeedReducer';

// 各々の要素に関するReducerのインポート宣言
export default combineReducers({
  feed: FeedReducer,
  news: NewsReducer
});