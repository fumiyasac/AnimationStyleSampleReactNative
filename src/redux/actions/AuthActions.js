/**
 * actions/AuthActions.js
 *
 * 認証結果を格納するステートを更新するためのアクション群
 * → 各々のアクションが実行されると対応するReducersに定義されたステート更新処理を実行する
 */

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// react-native-router-fluxライブラリのインポート宣言
import { Actions } from 'react-native-router-flux';

// 認証関連のアクションタイプ定義のインポート宣言
import { 
  MAIL_CHANGED,
  PASSWORD_CHANGED,
  REQUEST_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from './types';

// メールアドレス入力時に実行されるメソッド
export const mailChanged = (text) => {
  return { type: MAIL_CHANGED, payload: text };
};

// パスワード入力時に実行されるメソッド
export const passwordChanged = (text) => {
  return { type: PASSWORD_CHANGED, payload: text };
};

// ユーザー作成ボタン押下時に実行されるメソッド
export const createUser = ({ mail, password }) => {

  // アクションの実行とFirebaseへの認証処理を行う(非同期での実行)
  return (dispatch) => {

    dispatch({ type: REQUEST_USER });

    // 入力されたメールアドレス・パスワードをFirebaseへ登録する
    firebase.auth().createUserWithEmailAndPassword(mail, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFailure(dispatch));
  };
};

// ログインボタン押下時に実行されるメソッド
export const loginUser = ({ mail, password }) => {

  // アクションの実行とFirebaseへの認証処理を行う(非同期での実行)
  return (dispatch) => {

    dispatch({ type: REQUEST_USER });

    // サインイン用のfirebaseのメソッドauth().signInWithEmailAndPassword(email, password)を利用する
    firebase.auth().signInWithEmailAndPassword(mail, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFailure(dispatch));
  };
};

// ログイン認証失敗時に実行されるメソッド
const loginUserFailure = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILURE });
};

// ログイン認証成功時に実行されるメソッド
const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  // メインの画面へ遷移する
  Actions.main();
};

