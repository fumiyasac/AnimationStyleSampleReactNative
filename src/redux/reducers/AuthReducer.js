/**
 * reducers/AuthReducer.js
 *
 * 認証状態を管理するためのReducer
 * → 定義されたaction経由で実行されるステートに関する処理に関するロジックを定義する
 */

// 認証関連のアクションタイプ定義のインポート宣言
import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_INVALID,
  LOGIN_USER
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { email: '', password: '', user: null, error: '', loading: false };

// 選択されたケースを元にstateの更新を行うメソッド（アクションのタイプに応じての場合分けがされている）
export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAILURE:
      return { ...state, error: '認証に失敗しました。', password: '', loading: false };
    case LOGIN_USER_INVALID:
      return { ...state, error: '入力項目の形式が正しくありません。', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};