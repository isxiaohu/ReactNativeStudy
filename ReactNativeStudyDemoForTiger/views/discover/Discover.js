import React,{Component} from 'react';
import { ListView,Image,Navigator,View,StyleSheet,Text,Alert,Platform,Dimensions,ActivityIndicator} from 'react-native';
import Banner from 'react-native-banner';
import {PullList} from 'react-native-pull';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Discover extends Component{
	constructor(props){
		super(props);
		this.state = {
			text:"发现",
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

			const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.dataSource = [{
				id: 0,
				name:'德玛西亚',
				title: '德玛西亚学院最强学员',
			}];

			this.state = {
				text:"首页",
				list: ds.cloneWithRows(this.dataSource),
			};

	    this.renderHeader = this.renderHeader.bind(this);
		  this.renderRow = this.renderRow.bind(this);
	    this.renderFooter = this.renderFooter.bind(this);
	    this.loadMore = this.loadMore.bind(this);
	}

	onPullRelease(resolve) {
		//do something
		setTimeout(() => {
            resolve();
        }, 3000);
  }

	topIndicatorRender(pulling, pullok, pullrelease){
		return(
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
		  	<ActivityIndicator size="small" color="gray" />
		  	{pulling ? <Text>松开刷新</Text> : null}
		  	{pullok ? <Text>请求中...</Text> : null}
		  	{pullrelease ? <Text>请求中...</Text> : null}
			</View>
		);
	}

	renderHeader(){
			return (
				<View>
					<Banner
						banners={this.banners}
						defaultIndex={this.defaultIndex}
						onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
						intent={this.clickListener.bind(this)}/>
						<Text style = {styles.sectionTitle}>热门推荐：</Text>
				</View>
			);
	}

	renderRow(item, sectionID, rowID, highlightRow) {
		return (
				<View style={styles.listItem}>
						<Image style = {styles.listItemIcon} source={require('../../images/gailun.jpeg')}/>
						<View>
							<Text style = {styles.listItemTitle}>{item.name}</Text>
							<Text style = {{width:200}}>{item.title}</Text>
						</View>
				</View>
		);
	}

	renderFooter() {
			if(this.state.nomore) {
					return null;
			}
			return (
					<View style={{height: 50}}>
							<ActivityIndicator />
					</View>
			);
	}

	loadMore() {
		this.dataSource.push({
				 id: 0,
				 name:'德玛西亚',
				 title: '德玛西亚学院最强学员',
		 });
		 for(var i = 0; i < 5; i++) {
				 this.dataSource.push({
					 id: 0,
					 name:'诺克萨斯',
					 title: '德玛西亚学院最强学员',
				 })
		 }
		 this.dataSource.push({
			 id: 0,
			 name:'战争学院',
			 title: '德玛西亚学院最强学员',
		 });
		 setTimeout(() => {
				 this.setState({
						 list: this.state.list.cloneWithRows(this.dataSource)
				 });
		 }, 1000);
	}

	render(){
		return (
			<View style={styles.container}>
					 <PullList
						style={styles.ListView}
						onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
						renderHeader={this.renderHeader}
						dataSource={this.state.list}
						pageSize={5}
						initialListSize={5}
						renderRow={this.renderRow}
						onEndReached={this.loadMore}
						onEndReachedThreshold={60}
						renderFooter={this.renderFooter}/>
			 </View>
		);
	}

	clickListener(index){
			this.setState({
					clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
			})
	}

	onMomentumScrollEnd(event, state) {
				this.defaultIndex = state.index;
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
	sectionTitle:{
		paddingTop:10,
		paddingLeft:15,
		width:width,
		height:35,
		backgroundColor:"#eeeeee"
	},
	listItem:{
		alignItems: 'center',
		flexDirection:'row',
		borderRadius:5,
	},
	listItemIcon:{
		width:50,
		height:50,
		marginTop:10,
		marginLeft:20,
		marginRight:5,
		borderRadius:5,
	},
	listItemTitle:{
		marginTop:8,
		marginBottom:5
	},
});
