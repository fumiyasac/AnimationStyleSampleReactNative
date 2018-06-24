/**
 * actions/NewsActions.js
 *
 * 最新のお知らせ情報取得結果を格納するState(news)を更新するためのActionを実行するためのメソッド群(ActionCreators)の定義
 * → 各々のアクションが実行されると対応するReducers(NewsReducer)に定義されたState(news)の更新処理を実行する
 */

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// 最新のお知らせ情報取得関連のアクションタイプ定義のインポート宣言
import { 
	NEWS_FETCH,
	NEWS_FETCH_SUCCESS,
	NEWS_FETCH_FAILURE
} from './types';

// MARK: - Functions

// 新着のお知らせ情報取得開始時に実行されるメソッド
export const getAllNews = () => {
  return (dispatch) => {

    // 新着のお知らせ取得処理開始時のアクションを実行する
    dispatch({ type: NEWS_FETCH });

    // Firebaseの該当するDBの位置に存在するデータの一覧をJSON形式で取得する
    firebase.database().ref(`/database/news`)
      .once('value', snapshot => {
        fetchNewsSuccess(dispatch, snapshot.toJSON())
      })
      .catch(() => fetchNewsFailure(dispatch));
  };
};

// MARK: - Internal Functions

// 新着のお知らせ情報成功時に実行されるメソッド
const fetchNewsSuccess = (dispatch, values) => {

  // 新着のお知らせ情報取得成功時のアクションを実行する
  dispatch({ type: NEWS_FETCH_SUCCESS, payload: values });
};

// 新着のお知らせ情報失敗時に実行されるメソッド
const fetchNewsFailure = (dispatch) => {

  // 新着のお知らせ情報取得失敗時のアクションを実行する
  dispatch({ type: NEWS_FETCH_FAILURE });
};
