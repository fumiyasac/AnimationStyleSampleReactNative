# ReactNative + Redux + NativeBase + Firebase Sample

シンプルかつ必要最小限の実装構成での「ReactNative + Redux + NativeBase + Firebaseを組み合わせたサンプル」になります。
このサンプルのUIについてはなるべくNativeBaseに準拠した形にしています。

### 本サンプルの画面キャプチャ

__キャプチャ画像その1：__

![capture1.png](https://qiita-image-store.s3.amazonaws.com/0/17400/07ef4fbc-105c-2c20-19d3-a79fafc0681e.png)

__キャプチャ画像その2：__

![capture2.png](https://qiita-image-store.s3.amazonaws.com/0/17400/253f2797-f666-fcda-f8e7-fa098bf46bca.png)


### 画面に関するスケッチと遷移チャート

__遷移チャート図：__

![contents_mapping.png](https://qiita-image-store.s3.amazonaws.com/0/17400/323a02b7-1af4-8acb-cfa3-cc01ef7ba275.png)

### 使用ライブラリ

__1. DBや遷移などアプリのベースになる機能：__

| ライブラリ名 | ライブラリの機能概要 | バージョン |
|:-----------|:------------|:------------|
|[react-native-firebase](https://github.com/invertase/react-native-firebase) |認証＆DB機能 |5.0.3 |
|[react-native-router-flux](https://github.com/aksonov/react-native-router-flux) |画面遷移のコントロール |4.0.0-beta.28 |

__2. UIやデザイン要素のベースになる機能：__

| ライブラリ名 | ライブラリの機能概要 | バージョン |
|:-----------|:------------|:------------|
|[NativeBase](https://github.com/GeekyAnts/NativeBase) |UIコンポーネント |2.4.4 |
|[react-native-app-intro-slider](https://github.com/Jacse/react-native-app-intro-slider) |初回チュートリアル画面 |0.2.4 |

__3. Reduxを導入するにあたって必要なもの：__

| ライブラリ名 | ライブラリの機能概要 | バージョン |
|:-----------|:------------|:------------|
|[redux](https://github.com/reduxjs/redux) |タブ型のコンテンツ切り替え |4.0.0 |
|[react-redux](https://github.com/reduxjs/react-redux) |ComponentとReduxの接続 |5.0.7 |
|[redux-thunk](https://github.com/reduxjs/redux-thunk) |非同期通信 |2.2.0 |
|[redux-logger](https://github.com/evgenyrodionov/redux-logger) |stateのログ出力 |3.0.6 |

__4. ユニットテストを実行するとライブラリに起因するエラーが出る場合__

jestでユニットテスト(ReduxのテストやComponentのスナップショットテスト)を行う場合には、`package.json`内の`transformIgnorePatterns`の部分に下記の追記をするとテストが通るようになります。

```json:package.json
"jest": {
  "preset": "react-native",
  "transformIgnorePatterns": [
    "/node_modules/(?!native-base|react-native-router-flux)/"
  ]
}
```

### 詳細解説

このサンプル全体の詳細解説とポイントをまとめたものは下記に掲載しております。
+ https://qiita.com/fumiyasac@github/items/e27a5901dde1dbcb2086
