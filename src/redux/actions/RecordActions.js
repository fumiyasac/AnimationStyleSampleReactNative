/**
 * actions/AuthActions.js
 *
 * 認証結果を格納するステートを更新するためのアクション群
 * → 各々のアクションが実行されると対応するReducersに定義されたステート更新処理を実行する
 */

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// 記録関連のアクションタイプ定義のインポート宣言
import {
  RECORD_FETCH,
  RECORD_FETCH_SUCCESS
} from './types';

export const getAllRecords = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: RECORD_FETCH });
    firebase.database().ref(`/database/users/${currentUser.uid}/records`)
      .on('value', snapshot => {
        fetchRecordSuccess(dispatch, snapshot.toJSON())
      });
  };
};

// 成功時に実行されるメソッド
const fetchRecordSuccess = (dispatch, values) => {
  dispatch({ type: RECORD_FETCH_SUCCESS, payload: values });
};

