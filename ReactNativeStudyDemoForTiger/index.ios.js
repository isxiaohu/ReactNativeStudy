/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Splash from'./Splash';
class ReactNativeStudyDemoForTiger extends Component {
  render() {
    var defaultName = 'Splash';
    var defaultComponet = Splash;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponet }}
      configureScene = {(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
      }}
      renderScene = {(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }}
      />  
    );
  }
}

AppRegistry.registerComponent('ReactNativeStudyDemoForTiger', () => ReactNativeStudyDemoForTiger);
