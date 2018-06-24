/**
 * actions/types.js
 * Actionの分類タイプ(Actions)を定義した定数一覧
 * → 該当の定数で定義されたアクションを実行することで該当のState値を更新し、値の更新を伴う場合はpayloadにセットする
 */

// 認証処理に関するActionの定義
export const MAIL_CHANGED       = 'mail_changed';
export const PASSWORD_CHANGED   = 'password_changed';
export const REQUEST_USER       = 'request_user';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAILURE = 'login_user_failure';

// フィードの取得＆表示処理に関するActionの定義
export const FEED_FETCH         = 'feed_fetch';
export const FEED_FETCH_SUCCESS = 'feed_fetch_success';
export const FEED_FETCH_FAILURE = 'feed_fetch_failure';

// 新着お知らせの取得＆表示処理に関するActionの定義
export const NEWS_FETCH         = 'news_fetch';
export const NEWS_FETCH_SUCCESS = 'news_fetch_success';
export const NEWS_FETCH_FAILURE = 'news_fetch_failure';

// 記録データの取得＆表示処理に関するActionの定義
export const RECORD_FETCH          = 'record_fetch';
export const RECORD_FETCH_SUCCESS  = 'record_fetch_success';

// 記録データの追加・変更・削除処理に関するActionの定義
export const RECORD_REFRESH         = 'record_refresh';
export const RECORD_UID_CHANGED     = 'record_uid_changed';
export const RECORD_TITLE_CHANGED   = 'record_title_changed';
export const RECORD_CONTENT_CHANGED = 'record_content_changed';
export const RECORD_REQUEST_INVALID = 'record_request_invalid';
export const RECORD_REQUEST_CREATE  = 'record_request_create';
export const RECORD_REQUEST_UPDATE  = 'record_request_update';
export const RECORD_REQUEST_DELETE  = 'record_request_delete';
export const RECORD_REQUEST_SUCCESS = 'record_request_success';
export const RECORD_REQUEST_FAILURE = 'record_request_failure';
