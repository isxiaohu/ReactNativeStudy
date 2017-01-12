import React,{Component} from 'react';
import { Image,Navigator,View,StyleSheet,Text,Alert,Platform,ListView,ActivityIndicator,Dimensions} from 'react-native';
import {PullList} from 'react-native-pull';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Home extends Component{
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.dataSource = [{
			id: 0,
			name:'盖伦',
			title: '德玛西亚学院最强学员',
		}];
		this.categorySource = [{
			name:'早教',
			url:'www.tiger.com',
		},
		{
			name:'成教',
			url:'www.tiger.com',
		},
		{
			name:'艺术',
			url:'www.tiger.com',
		},
		{
			name:'证书',
			url:'www.tiger.com',
		},
		{
			name:'盖伦',
			url:'www.tiger.com',
		},
		{
			name:'菊花信',
			url:'www.tiger.com',
		},
		{
			name:'儿童劫',
			url:'www.tiger.com',
		},
		{
			name:'托儿索',
			url:'www.tiger.com',
		}];

		this.state = {
			text:"首页",
			list: ds.cloneWithRows(this.dataSource),
			category: ds.cloneWithRows(this.categorySource),
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
					<View style = {styles.searchView}>
						<Text style = {styles.searchCity}>上海</Text>
						<View style = {styles.searchBar}>
							<Image style = {styles.searchIcon} source = {require('../../images/search_button.png')}/>
							<Text>搜索学校，课程，老师</Text>
						</View>
					</View>
          <ListView style={styles.categoryListView}
					dataSource={this.state.category}
					contentContainerStyle={styles.listContent}
          renderRow={(rowData) =>
						<View style = {styles.categoryItemView}>
							<Image  style = {styles.categoryIcon} source = {require('../../images/category_icon.png')}/>
							<Text style = {styles.catrgoryName}>{rowData.name}</Text>
						</View>}>
          </ListView>
					<Text style = {styles.sectionTitle}>猜你喜欢：</Text>
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
				 name:'盖伦',
				 title: '德玛西亚学院最强学员',
		 });
		 for(var i = 0; i < 5; i++) {
				 this.dataSource.push({
					 id: 0,
					 name:'盖伦',
					 title: '德玛西亚学院最强学员',
				 })
		 }
		 this.dataSource.push({
			 id: 0,
			 name:'盖伦',
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
}

const styles = StyleSheet.create({
	container: {
		flex:1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
	searchView:{
		width:width,
		height:44,
		alignItems: 'center',
    flexDirection:'row',
		backgroundColor:'#dddddd',
	},
	searchCity:{
		marginLeft:15,
		marginRight:10,
		fontSize:16,
	},
	searchBar:{
		width:width - 70,
		height:32,
		borderRadius:6,
    borderColor:"#000000",
    borderWidth:1,
		flexDirection:'row',
		alignItems: 'center',
	},
	searchIcon:{
		width:20,
		height:20,
		marginLeft:5,
		marginRight:5,
	},
	categoryListView:{
		width:width,
		height:180,
		backgroundColor:"#ffffff",
	},
	categoryItemView:{
		width:width/4,
		height:90,
		alignItems:'center',
    justifyContent: 'center',
	},
	listContent:{
	 	alignItems: 'center',
	 	flex: 1,
	 	flexDirection: 'row',
	 	flexWrap: 'wrap',
	 	justifyContent: 'space-around',
 	},
	categoryIcon:{
		width:width/4 - 46,
		height:width/4 - 46,
	},
	catrgoryName:{
		marginTop:10,
	},
	page:{
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
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
