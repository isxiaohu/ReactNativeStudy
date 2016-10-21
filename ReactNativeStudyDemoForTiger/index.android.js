/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import ToastTigerAndroid from './NativeView/android/ToastTigerAndroid';
import TigerCoustomView from './NativeView/android/TigerCustomView'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativeStudyDemoForTiger extends Component {
  constructor(props){
    super(props);
    ToastTigerAndroid.show('农家小炒肉',ToastTigerAndroid.SHORT);
    ToastTigerAndroid.measureLayout(100,100,(msg) => {
      console.log(msg);
      ToastTigerAndroid.show(msg,ToastTigerAndroid.SHORT);
    },(x, y, width, height) => {
      ToastTigerAndroid.show(x + ':' + y + ':' + width + ':' + height,ToastTigerAndroid.SHORT);
    });
  }
  
  onClick(){
    ToastTigerAndroid.show('点你妹啊',ToastTigerAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TigerCoustomView onChangeMessage = {this.onClick} bg = {'258217'} style = {styles.custom}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  custom: {
    width: 300,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeStudyDemoForTiger', () => ReactNativeStudyDemoForTiger);
