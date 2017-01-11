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
					title: 'this is the first.',
		}];
		this.categorySource = [{
			name:'分类1',
			url:'www.tiger.com',
		},
		{
			name:'分类2',
			url:'www.tiger.com',
		},
		{
			name:'分类3',
			url:'www.tiger.com',
		},
		{
			name:'分类4',
			url:'www.tiger.com',
		},
		{
			name:'分类5',
			url:'www.tiger.com',
		},
		{
			name:'分类6',
			url:'www.tiger.com',
		},
		{
			name:'分类7',
			url:'www.tiger.com',
		},
		{
			name:'分类8',
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
          <ListView style={styles.categoryListView}
					dataSource={this.state.category}
					contentContainerStyle={styles.listContent}
          renderRow={(rowData) =>
						<View style = {styles.categoryItemView}>
							<Image  style = {styles.categoryIcon} source = {require('../../images/category_icon.png')}/>
							<Text style = {styles.catrgoryName}>{rowData.name}</Text>
						</View>}>
          </ListView>
      );
  }

  renderRow(item, sectionID, rowID, highlightRow) {
    return (
		    <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
            <Text>{item.id}</Text>
        </View>
    );
  }

  renderFooter() {
		  if(this.state.nomore) {
          return null;
      }
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
  }

  loadMore() {
		this.dataSource.push({
				 id: 0,
				 title: 'begin to create data ...',
		 });
		 for(var i = 0; i < 5; i++) {
				 this.dataSource.push({
						 id: i + 1,
						 title: 'this is ${i}',
				 })
		 }
		 this.dataSource.push({
				 id: 6,
				 title: 'finish create data ...',
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
});
