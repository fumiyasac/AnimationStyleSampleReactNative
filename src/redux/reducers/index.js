/**
 * reducers/index.js
 * 
 * Viewのデータ表示で使用するReducerの定義（アプリケーションの全体で管理しているState一覧を管理し集約している）
 * Reduxの原則の1つであるグローバルな状態ツリーがすべてのソースとなるが、一部を更新するような形がほとんどなので役割に応じてReducerを分割する。
 */

// combineReducersの処理を行うためのインポート宣言
import { combineReducers } from 'redux';

//各々の要素に関するReducerのインポート宣言
// → AuthReducer: 認証処理に関するState処理に関するReducer
// → NewsReducer: 最新のお知らせの取得処理に関するState処理に関するReducer
// → FeedReducer: フィード情報の取得処理に関するState処理に関するReducer
// → RecordReducer: 記録データ情報の取得処理に関するState処理に関するReducer
// → RecordFormReducer: 記録データのフォーム処理に関するState処理に関するReducer
import AuthReducer from './AuthReducer';
import NewsReducer from './NewsReducer';
import FeedReducer from './FeedReducer';
import RecordReducer from './RecordReducer';
import RecordFormReducer from './RecordFormReducer';

// それぞれのReducerを集約して一つのStateとして管理する
export default combineReducers({
  auth: AuthReducer,
  feed: FeedReducer,
  news: NewsReducer,
  records: RecordReducer,
  recordForm: RecordFormReducer
});