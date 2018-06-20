/**
 * actions/NewsActions.js
 */

import { 
	NEWS_FETCH,
	NEWS_FETCH_SUCCESS,
	NEWS_FETCH_FAILURE
} from './types';

// firebaseライブラリのインポート宣言
import firebase from 'firebase';

// 新着のお知らせ情報取得開始時に実行されるメソッド
export const getAllNews = () => {
  return (dispatch) => {
    dispatch({ type: NEWS_FETCH });

		// Reducerへ渡すオブジェクトを作成する
    firebase.database().ref(`/database/news`)
      .once('value', snapshot => {
        fetchNewsSuccess(dispatch, snapshot.toJSON())
      })
      .catch(() => fetchNewsFailure(dispatch));
  };
};

// 新着のお知らせ情報成功時に実行されるメソッド
const fetchNewsSuccess = (dispatch, values) => {
  dispatch({ type: NEWS_FETCH_SUCCESS, payload: values });
};

// 新着のお知らせ情報失敗時に実行されるメソッド
const fetchNewsFailure = (dispatch) => {
  dispatch({ type: NEWS_FETCH_FAILURE });
};
