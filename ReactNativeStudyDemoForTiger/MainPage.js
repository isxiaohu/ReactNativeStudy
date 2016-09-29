
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Navigator,
} from 'react-native';

export default class MainPage extends Component {
	constructor(props){
		super(props);
	}		
  	render(){
		const { navigator } = this.props;
		return(
			<View style = {styles.container}>
					<Text>首页</Text>
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