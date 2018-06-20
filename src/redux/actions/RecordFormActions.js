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

// 記録関連のアクションタイプ定義のインポート宣言
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

export const titleChanged = (text) => {
  return { type: RECORD_TITLE_CHANGED, payload: text };
};

export const contentChanged = (text) => {
  return { type: RECORD_CONTENT_CHANGED, payload: text };
};

export const uidChanged = (uid) => {
  return { type: RECORD_UID_CHANGED, payload: uid };
};

export const refreshRecord = () => {
  return { type: RECORD_REFRESH };
};

export const createRecord = ({ title, content }) => {
  if (title === "" || content === "") {
    return { type: RECORD_REQUEST_INVALID };
  }
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: RECORD_REQUEST_CREATE });
    firebase.database().ref(`/database/users/${currentUser.uid}/records`)
      .push({ 
        title, content
      })
      .then(() => {
        dispatch({ type: RECORD_REQUEST_SUCCESS });
        Actions.pop();
      })
      .catch(() => {
        dispatch({ type: RECORD_REQUEST_FAILURE });
      });
  };
};

export const saveRecord = ({ title, content, uid }) => {
  if (title === "" || content === "") {
    return { type: RECORD_REQUEST_INVALID };
  }
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: RECORD_REQUEST_UPDATE });
    firebase.database().ref(`/database/users/${currentUser.uid}/records/${uid}`)
      .set({ 
        title, content
      })
      .then(() => {
        dispatch({ type: RECORD_REQUEST_SUCCESS });
        Actions.pop();
      })
      .catch(() => {
        dispatch({ type: RECORD_REQUEST_FAILURE });
      });
  };
};

export const deleteRecord = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: RECORD_REQUEST_DELETE });
    firebase.database().ref(`/database/users/${currentUser.uid}/records/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: RECORD_REQUEST_SUCCESS });
        Actions.pop();
      })
      .catch(() => {
        dispatch({ type: RECORD_REQUEST_FAILURE });
      });
  };
};

