import React,{Component} from 'react';
import { Navigator,View,StyleSheet,Text,Alert} from 'react-native';
import MapView from './../../NativeView/MapView';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {text:"hahaha"}
	}

	change(){
		console.log('我没妹');
	}
	
	render(){
		var region = {
		 latitude: 31.41,
		 longitude: 121.48,
		 latitudeDelta: 0.01,
		 longitudeDelta: 0.01,
	 	};
		return (
			<View style={styles.container}>
				<Text>{this.state.text}</Text>
				<MapView pitchEnabled={false}
					style={styles.mapstyle}
				 	region={region}
					onRegionChange={this.change}
					onChange={(region) => this.setState({region})}/>
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
