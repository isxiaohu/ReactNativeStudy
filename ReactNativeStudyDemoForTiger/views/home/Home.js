import React,{Component} from 'react';
import { Navigator,View,StyleSheet,Text} from 'react-native';

export default class Home extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text>这里是首页</Text>
			</View>
		);
	}	
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});