/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// チュートリアル用のアニメーションライブラリ用のコンポーネントのインポート宣言
// ※ ライブラリ名: react-native-app-intro-slider
// https://github.com/Jacse/react-native-app-intro-slider
import AppIntroSlider from 'react-native-app-intro-slider';

export default class TutorialCard extends React.Component {

  // MARK: - Functions

  // チュートリアル表示で「終了」ボタンを押した際の処理
  _onPressOnboadingEndButton = () => {
    Actions.AuthContents();
  };

  // MARK: - Rendering Components

  render() {
    const { tutorialContentsData } = this.props;
    return (
      <View style={styles.background}>
        <AppIntroSlider style={styles.appTutorial}
          slides={tutorialContentsData}
          nextLabel={"次へ"}
          doneLabel={"終了"}
          onDone={ () => { this._onPressOnboadingEndButton() } }
          />
      </View>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  appTutorial: {
    flex: 1
  }
});