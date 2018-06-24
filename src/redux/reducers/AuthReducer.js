/**
 * reducers/AuthReducer.js
 *
 * 認証状態を管理するためのReducer
 * → 定義されたAction経由で実行されるState(auth)に関する処理に関するロジックを定義する
 */

// 認証関連のAction定義のインポート宣言
import { 
  MAIL_CHANGED,
  PASSWORD_CHANGED,
  REQUEST_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../actions/types';

// 初期状態のステート定義（オブジェクトの形にする）
const initialState = { mail: '', password: '', user: null, error: '', loading: false };

// MARK: - Functions

// 選択されたケースを元にstateの更新を行うメソッド（アクションのタイプに応じての場合分けがされている）
export default (state = initialState, action) => {
  switch (action.type) {
    case MAIL_CHANGED:
      return { ...state, mail: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case REQUEST_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAILURE:
      return { ...state, error: 'ユーザー登録または認証に失敗しました。', loading: false };
    default:
      return state;
  }
};