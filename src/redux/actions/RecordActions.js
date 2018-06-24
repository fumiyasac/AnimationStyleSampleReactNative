/**
 * actions/RecordActions.js
 *
 * 記録データ情報取得結果を格納するState(records)を更新するためのActionを実行するためのメソッド群(ActionCreators)の定義
 * → 各々のアクションが実行されると対応するReducers(RecordReducer)に定義されたState(records)の更新処理を実行する
 */

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// 記録データ情報取得関連のアクションタイプ定義のインポート宣言
import {
  RECORD_FETCH,
  RECORD_FETCH_SUCCESS
} from './types';

// MARK: - Functions

// 記録データ情報取得開始時に実行されるメソッド
export const getAllRecords = () => {

  // Firebaseの認証情報より現在のユーザーID(uid)を取得する
  const { currentUser } = firebase.auth();

  return (dispatch) => {

    // 記録データ情報取得処理開始時のアクションを実行する
    dispatch({ type: RECORD_FETCH });

    // Firebaseの該当するユーザーのIDに紐づくデータの一覧をJSON形式で取得する
    firebase.database().ref(`/database/users/${currentUser.uid}/records`)
      .on('value', snapshot => {
        fetchRecordSuccess(dispatch, snapshot.toJSON())
      });
  };
};

// MARK: - Internal Functions

// 記録データ情報取得成功時に実行されるメソッド
const fetchRecordSuccess = (dispatch, values) => {

  // 記録データ情報取得成功時のアクションを実行する
  dispatch({ type: RECORD_FETCH_SUCCESS, payload: values });
};

