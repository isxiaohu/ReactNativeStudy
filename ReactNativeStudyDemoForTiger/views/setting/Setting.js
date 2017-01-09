import React,{Component} from 'react';
import { Navigator,View,StyleSheet,Text,Alert} from 'react-native';

export default class Setting extends Component{
	constructor(props){
		super(props);
		this.state = {text:"设置"}
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>{this.state.text}</Text>
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
	mapstyle: {
		width:300,
		height:300,
	},
});
