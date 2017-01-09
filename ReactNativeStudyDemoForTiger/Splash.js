
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import MainPage from './MainPage';

export default class Splash extends Component {
  constructor(props){
    super(props);
    this.state = {};
    var { navigator } = this.props;
    setTimeout(() => {
      navigator.replace({
        name: 'MainPage',
        component: MainPage,
      });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/splash.png')} style={styles.backgroundImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    marginTop: 20,
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'transparent',
		resizeMode: 'cover',
	},
});
