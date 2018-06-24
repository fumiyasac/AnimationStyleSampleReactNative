/**
 * actions/FeedActions.js
 *
 * フィード情報取得結果を格納するState(feed)を更新するためのActionを実行するためのメソッド群(ActionCreators)の定義
 * → 各々の定義したメソッドが実行されると対応するReducers(FeedReducer)に定義されたState(feed)の更新処理を実行する
 */

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// フィード情報取得処理関連のアクションタイプ定義のインポート宣言
import { 
  FEED_FETCH,
  FEED_FETCH_SUCCESS,
  FEED_FETCH_FAILURE
} from './types';

// MARK: - Functions

// フィード情報取得開始時に実行されるメソッド
export const getAllFeed = () => {
  return (dispatch) => {

    // フィード取得処理開始時のアクションを実行する
    dispatch({ type: FEED_FETCH });

    // Firebaseの該当するDBの位置に存在するデータの一覧をJSON形式で取得する
    firebase.database().ref(`/database/feed`)
      .once('value', snapshot => {
        fetchFeedSuccess(dispatch, snapshot.toJSON())
      })
      .catch(() => fetchFeedFailure(dispatch));
  };
};

// MARK: - Internal Functions

// フィード情報取得成功時に実行されるメソッド
const fetchFeedSuccess = (dispatch, feed) => {

  // フィード情報取得成功時のアクションを実行する
  dispatch({ type: FEED_FETCH_SUCCESS, payload: feed });
};

// フィード情報取得失敗時に実行されるメソッド
const fetchFeedFailure = (dispatch) => {

  // フィード情報取得失敗時のアクションを実行する
  dispatch({ type: FEED_FETCH_FAILURE });
};
