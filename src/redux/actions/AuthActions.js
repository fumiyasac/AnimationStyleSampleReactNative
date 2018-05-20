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
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_INVALID
} from './types';

// メールアドレス入力時に実行されるメソッド
export const emailChanged = (text) => {

  // アクションとステートの変更後に変わる値を設定
  return { type: EMAIL_CHANGED, payload: text };
};

// パスワード入力時に実行されるメソッド
export const passwordChanged = (text) => {

  // アクションとステートの変更後に変わる値を設定
  return { type: PASSWORD_CHANGED, payload: text };
};

// ログインボタン押下時に実行されるメソッド
export const loginUser = ({ email, password }) => {

  // アクションの実行とFirebaseへの認証処理を行う(非同期での実行)
  return (dispatch) => {

    // ステートの更新を行う（ログイン中状態のステータスにする）
    dispatch({ type: LOGIN_USER });

    // サインイン用のfirebaseのメソッドauth().signInWithEmailAndPassword(email, password)を利用する
    // 入力されたメールアドレス・パスワードを元にFirebaseの認証を行う
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {

        // エラー時のデバッグ用ログ出力
        console.log(error);
        loginUserInvalid(dispatch);

        // 入力されたメールアドレス・パスワードをFirebaseへ登録する
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      }
    );
  };
};

// 形式が正しくない場合に実行されるメソッド
const loginUserInvalid = (dispatch) => {

  // ステートの更新を行う（ログイン失敗状態のステータスにする）
  dispatch({ type: LOGIN_USER_INVALID });
};

// ログイン認証失敗時に実行されるメソッド
const loginUserFail = (dispatch) => {

  // ステートの更新を行う（ログイン失敗状態のステータスにする）
  dispatch({ type: LOGIN_USER_FAILURE });
};

// ログイン認証成功時に実行されるメソッド
const loginUserSuccess = (dispatch, user) => {

  // ステートの更新を行う（ログイン成功状態のステータスにする）
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  // メインの画面へ遷移する
  Actions.main();
};

