/**
 * reducers/index.js
 * 
 * データ表示で使用するReducerの定義（アプリケーションのステート一覧に関するもの）
 * Reduxの原則の1つであるグローバルな状態ツリーがすべてのソースとなるが、一部を更新するような形がほとんどなので役割に応じてReducerを分割する。
 */

import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NewsReducer from './NewsReducer';
import FeedReducer from './FeedReducer';
import RecordReducer from './RecordReducer';
import RecordFormReducer from './RecordFormReducer';

export default combineReducers({
  auth: AuthReducer,
  feed: FeedReducer,
  news: NewsReducer,
  records: RecordReducer,
  recordForm: RecordFormReducer
});