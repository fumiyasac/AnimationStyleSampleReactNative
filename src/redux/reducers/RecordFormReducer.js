/**
 * reducers/RecordFormReducer.js
 */

// 記録変更関連のアクションタイプ定義のインポート宣言
import { 
  RECORD_REFRESH,
  RECORD_UID_CHANGED,
  RECORD_TITLE_CHANGED,
  RECORD_CONTENT_CHANGED,
  RECORD_REQUEST_INVALID,
  RECORD_REQUEST_CREATE,
  RECORD_REQUEST_UPDATE,
  RECORD_REQUEST_DELETE,
  RECORD_REQUEST_SUCCESS,
  RECORD_REQUEST_FAILURE,
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { uid: null, title: '', content: '', error: '', loading: false };

// 選択されたケースを元にstateの更新を行うメソッド（アクションのタイプに応じての場合分けがされている）
export default (state = initialState, action) => {
  switch (action.type) {
    case RECORD_UID_CHANGED:
      return { ...state, uid: action.payload };      
    case RECORD_TITLE_CHANGED:
      return { ...state, title: action.payload };
    case RECORD_CONTENT_CHANGED:
      return { ...state, content: action.payload };
    case RECORD_REQUEST_CREATE:
    case RECORD_REQUEST_UPDATE:
    case RECORD_REQUEST_DELETE:
      return { ...state, loading: true, error: '' };
    case RECORD_REQUEST_SUCCESS:
    case RECORD_REFRESH:
    return initialState;
    case RECORD_REQUEST_INVALID:
      return { ...state, error: 'タイトルまたは本文が入力されていません。', loading: false };
    case RECORD_REQUEST_FAILURE:
      return { ...state, error: '記録データの更新に失敗しました。', loading: false };
    default:
      return state;
  }
};