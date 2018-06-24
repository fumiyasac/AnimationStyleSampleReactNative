/**
 * Actionを発行するためのメソッド(ActionCreator)の一覧のインポート宣言
 * → AuthActions：認証結果を格納するState(auth)を更新するためのActionCreatorの一覧が存在する
 * → FeedActions：フィードデータに関する結果を格納するState(feed)を更新するためのActionCreatorの一覧が存在する
 * → NewsActions：最新お知らせデータに関する結果を格納するState(news)を更新するためのActionCreatorの一覧が存在する
 * → RecordActions：記録データに関する結果を格納するState(records)を更新するためのActionCreatorの一覧が存在する
 * → RecordFormActions：記録データのフォーム入力処理に関する結果を格納するState(recordForm)を更新するためのActionCreatorの一覧が存在する
 */

// それぞれの機能やタイミングでActionを発行するActionCreatorのインポート宣言
export * from './AuthActions';
export * from './FeedActions';
export * from './NewsActions';
export * from './RecordActions';
export * from './RecordFormActions';
