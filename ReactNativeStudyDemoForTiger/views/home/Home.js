import React,{Component} from 'react';
import { Navigator,View,StyleSheet,Text,Alert,Platform} from 'react-native';
//var {ControlledRefreshableListView} = require('react-native-refreshable-listview')

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			text:"首页",
		}
	}
	propTypes: {
		// eg. props mapped from store state
		articles: React.PropTypes.array.isRequired,
		isRefreshingArticles: React.PropTypes.bool.isRequired,
		// eg. a bound action creator
		refreshArticles: React.PropTypes.func.isRequired,
	}
	// getInitialState() {
  //   return {dataSource: ds.cloneWithRows(this.props.articles)}
  // }
  componentWillReceiveProps(nextProps) {
    if (this.props.articles !== nextProps.articles) {
      this.setState({dataSource: ds.cloneWithRows(nextProps.articles)})
    }
  }
  renderArticle(article) {
    return <Text>yayayayyaya</Text>
  }
	render(){
		return (
			// <ControlledRefreshableListView
			// 		dataSource={this.state.dataSource}
			// 		renderRow={this.renderArticle}
			// 		isRefreshing={this.props.isRefreshingArticles}
			// 		onRefresh={this.props.refreshArticles}
			// 		refreshDescription="Refreshing articles"
			// 	/>
			<View/>
		);
	}

}

var indicatorStylesheet = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    height: 60,
    marginTop: 10,
  },
  content: {
    backgroundColor: 'blue',
    marginTop: 10,
    height: 60,
  },
});

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
