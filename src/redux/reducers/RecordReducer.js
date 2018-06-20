/**
 * reducers/RecordReducer.js
 */

import { 
  RECORD_FETCH,
  RECORD_FETCH_SUCCESS
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { recordList: null, loading: false };;

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
