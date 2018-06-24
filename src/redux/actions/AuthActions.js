/**
 * actions/AuthActions.js
 *
 * 認証結果を格納するState(auth)を更新するためのActionを実行するためのメソッド群(ActionCreators)の定義
 * → 各々の定義したメソッドが実行されると対応するReducers(AuthReducer)に定義されたState(auth)の更新処理を実行する
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

// MARK: - Functions

// メールアドレス入力時に実行されるメソッド
export const mailChanged = (text) => {

  // メールアドレス変更時のアクションを実行する(payloadに受け取った値を入れる)
  return { type: MAIL_CHANGED, payload: text };
};

// パスワード入力時に実行されるメソッド
export const passwordChanged = (text) => {

  // パスワード変更時のアクションを実行する(payloadに受け取った値を入れる)
  return { type: PASSWORD_CHANGED, payload: text };
};

// ユーザー作成ボタン押下時に実行されるメソッド
export const createUser = ({ mail, password }) => {

  // アクションの実行とFirebaseへの認証処理を行う(非同期での実行)
  return (dispatch) => {

    // 認証処理開始時のアクションを実行する
    dispatch({ type: REQUEST_USER });

    // 入力されたメールアドレス・パスワードをFirebaseへ登録する
    // ※ 新規登録用のFirebaseのメソッドauth().createUserWithEmailAndPassword(email, password)を利用してユーザー登録を行う
    firebase.auth().createUserWithEmailAndPassword(mail, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFailure(dispatch));
  };
};

// ログインボタン押下時に実行されるメソッド
export const loginUser = ({ mail, password }) => {

  // アクションの実行とFirebaseへの認証処理を行う(非同期での実行)
  return (dispatch) => {

    // 認証処理開始時のアクションを実行する
    dispatch({ type: REQUEST_USER });

    // Firebaseの認証処理を実行する
    // ※ サインイン用のFirebaseのメソッドauth().signInWithEmailAndPassword(email, password)を利用して認証を行う
    firebase.auth().signInWithEmailAndPassword(mail, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFailure(dispatch));
  };
};

// MARK: - Internal Functions

// ログイン認証失敗時に実行されるメソッド
const loginUserFailure = (dispatch) => {

  // 認証成功時のアクションを実行する
  dispatch({ type: LOGIN_USER_FAILURE });
};

// ログイン認証成功時に実行されるメソッド
const loginUserSuccess = (dispatch, user) => {

  // 認証失敗時のアクションを実行する
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  // メインの画面へ遷移する
  Actions.main();
};

