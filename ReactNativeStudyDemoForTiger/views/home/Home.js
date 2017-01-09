import React,{Component} from 'react';
import { Navigator,View,StyleSheet,Text,Alert,Platform} from 'react-native';
import Banner from 'react-native-banner';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			text:"首页",
			clickTitle: 'You can try clicking beauty',
			defaultIndex: 0,
		}
		this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};
		this.defaultIndex = 0;
		this.banners = [
					{
							title: '老婆一号',
							image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
					},
					{
							title: '老婆二号',
							image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
					},
					{
							title: '老婆三号',
							image: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
					},
					{
							// title: 'no title',
							image: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
					},
			];
	}

	clickListener(index){
			this.setState({
					clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
			})
	}

	onMomentumScrollEnd(event, state) {
				this.defaultIndex = state.index;
	}

	render(){
		return (
			<View style={styles.container}>
				<Banner
					banners={this.banners}
					defaultIndex={this.defaultIndex}
					onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
					intent={this.clickListener.bind(this)}/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
	mapstyle: {
		width:300,
		height:300,
	},
});
