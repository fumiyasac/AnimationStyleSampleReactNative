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

// チュートリアル用のアニメーションライブラリ
import AppIntroSlider from 'react-native-app-intro-slider';

export default class TutorialCard extends React.Component {

  _onPressOnboadingEndButton = () => {
    Actions.AuthContents();
  };

  render() {
    const { tutorialContentsData } = this.props;
    return (
      <View style={styles.background}>
        <AppIntroSlider style={styles.appTutorial}
          slides={tutorialContentsData} 
          onDone={ () => { this._onPressOnboadingEndButton() } }
          />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  appTutorial: {
    flex: 1
  }
});