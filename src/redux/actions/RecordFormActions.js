/**
 * actions/RecordFormActions.js
 *
 * 記録データのフォーム処理(追加・変更・削除)時の結果を格納するState(recordForm)を更新するためのActionを実行するためのメソッド群(ActionCreators)の定義
 * → 各々のアクションが実行されると対応するReducers(RecordFormReducer)に定義されたState(recordForm)の更新処理を実行する
 */

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// react-native-router-fluxライブラリのインポート宣言
import { Actions } from 'react-native-router-flux';

// 記録データのフォーム処理関連のアクションタイプ定義のインポート宣言
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
} from './types';

// MARK: - Functions

// タイトル項目変更時に実行されるメソッド
export const titleChanged = (text) => {

  // タイトル項目変更時のアクションを実行する(payloadに受け取った値を入れる)
  return { type: RECORD_TITLE_CHANGED, payload: text };
};

// 本文項目変更時に実行されるメソッド
export const contentChanged = (text) => {

  // 本文項目変更時のアクションを実行する(payloadに受け取った値を入れる)
  return { type: RECORD_CONTENT_CHANGED, payload: text };
};

// UniqueID項目変更時に実行されるメソッド
export const uidChanged = (uid) => {

  // UniqueID項目変更時のアクションを実行する(payloadに受け取った値を入れる)
  return { type: RECORD_UID_CHANGED, payload: uid };
};

// 初期状態のState(recordForm)にリフレッシュする際に実行されるメソッド
export const refreshRecord = () => {

  // 初期状態のState(recordForm)にリフレッシュするアクションを実行する
  return { type: RECORD_REFRESH };
};

// 記録データ新規登録時に実行されるメソッド
export const createRecord = ({ title, content }) => {

  // 引数で受け取ったデータのバリデーションを行う
  if (title === "" || content === "") {

    // 受け取ったデータが不正であることを伝えるアクションを実行する
    return { type: RECORD_REQUEST_INVALID };
  }

  // Firebaseの認証情報より現在のユーザーID(uid)を取得する
  const { currentUser } = firebase.auth();

  // FirebaseのDB処理を実行する
  return (dispatch) => {

    // 記録データ新規登録処理開始時のアクションを実行する
    dispatch({ type: RECORD_REQUEST_CREATE });

    // 記録データ新規登録処理を行う
    firebase.database().ref(`/database/users/${currentUser.uid}/records`)
      .push({ 
        title, content
      })
      .then(() => {

        // 記録データ新規登録成功時に実行されるアクションを実行する
        dispatch({ type: RECORD_REQUEST_SUCCESS });
        Actions.pop();
      })
      .catch(() => {

        // 記録データ新規登録失敗時に実行されるアクションを実行する
        dispatch({ type: RECORD_REQUEST_FAILURE });
      });
  };
};

// 記録データ更新時に実行されるメソッド
export const saveRecord = ({ title, content, uid }) => {

  // 引数で受け取ったデータのバリデーションを行う
  if (title === "" || content === "") {

    // 受け取ったデータが不正であることを伝えるアクションを実行する
    return { type: RECORD_REQUEST_INVALID };
  }

  // Firebaseの認証情報より現在のユーザーID(uid)を取得する
  const { currentUser } = firebase.auth();

  // FirebaseのDB処理を実行する
  return (dispatch) => {

    // 記録データ更新処理開始時のアクションを実行する
    dispatch({ type: RECORD_REQUEST_UPDATE });

    // 記録データ新規登録処理を行う
    firebase.database().ref(`/database/users/${currentUser.uid}/records/${uid}`)
      .set({ 
        title, content
      })
      .then(() => {

        // 記録データ更新成功時に実行されるアクションを実行する
        dispatch({ type: RECORD_REQUEST_SUCCESS });
        Actions.pop();
      })
      .catch(() => {

        // 記録データ更新失敗時に実行されるアクションを実行する
        dispatch({ type: RECORD_REQUEST_FAILURE });
      });
  };
};

// 記録データ削除時に実行されるメソッド
export const deleteRecord = ({ uid }) => {

  // Firebaseの認証情報より現在のユーザーID(uid)を取得する
  const { currentUser } = firebase.auth();

  // FirebaseのDB処理を実行する
  return (dispatch) => {

    // 記録データ削除処理開始時のアクションを実行する
    dispatch({ type: RECORD_REQUEST_DELETE });

    // 記録データ削除処理を行う
    firebase.database().ref(`/database/users/${currentUser.uid}/records/${uid}`)
      .remove()
      .then(() => {

        // 記録データ削除成功時に実行されるアクションを実行する
        dispatch({ type: RECORD_REQUEST_SUCCESS });
        Actions.pop();
      })
      .catch(() => {

        // 記録データ削除失敗時に実行されるアクションを実行する
        dispatch({ type: RECORD_REQUEST_FAILURE });
      });
  };
};

