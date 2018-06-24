/**
 * reducers/RecordReducer.js
 * 記録データ情報の取得状態を管理するためのReducer
 * → 定義されたAction経由で実行されるState(records)に関する処理に関するロジックを定義する
 */

// 記録データ情報のAction定義のインポート宣言
import { 
  RECORD_FETCH,
  RECORD_FETCH_SUCCESS
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { recordList: null, loading: false };;

// MARK: - Functions

// 選択されたケースを元にstateの更新を行うメソッド
export default (state = initialState, action) => {
  switch (action.type) {
    case RECORD_FETCH:
      return { ...state, ...initialState, loading: true };
    case RECORD_FETCH_SUCCESS:
      return { ...state, ...initialState, recordList: action.payload };
    default:
      return state;
  }
};
