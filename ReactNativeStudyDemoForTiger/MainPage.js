
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TabBarIOS,
  Alert
} from 'react-native';

import Home from './views/home/Home';
import Discover from './views/discover/Discover';
import Setting from './views/setting/Setting';
import CourseDetail from './views/CourseDetail';

const HOME_TAB = 'home_tab';
const DISCOVER_TAB = 'discover-tab';
const SETTING_TAB = 'setting_tab';

export default class MainPage extends Component {
	constructor(props){
		super(props);
    this.state = {
      selectedTab: HOME_TAB,
    };
	}

  _renderContent(pageName: string, num?: number){
    var renderView;
    if(pageName == HOME_TAB){
      renderView = <Home navigator={this.props.navigator}/>
    }else if(pageName == DISCOVER_TAB){
      renderView = <Discover navigator={this.props.navigator}/>
    }else if(pageName == SETTING_TAB){
      renderView = <Setting navigator={this.props.navigator}/>
    }
    return (
      <View style={styles.pageView}>
        {renderView}
      </View>
    );
  }

  render(){
		return(
			<View style = {styles.container}>
        <TabBarIOS
          tintColor="#11a984"
          barTintColor="#FFFFFF">
          <TabBarIOS.Item
            title = "首页"
            icon={require('./images/icon_home_nor.png')}
            selected={this.state.selectedTab === HOME_TAB}
            onPress={()=>
              this.setState({ selectedTab: HOME_TAB})
            }>
            {this._renderContent(HOME_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = "发现"
            icon={require('./images/icon_find_nor.png')}
            selected={this.state.selectedTab === DISCOVER_TAB}
            onPress={()=>
              this.setState({ selectedTab: DISCOVER_TAB})
            }>
            {this._renderContent(DISCOVER_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = "设置"
            icon={require('./images/icon_user_nor.png')}
            selected={this.state.selectedTab === SETTING_TAB}
            onPress={()=>
              this.setState({ selectedTab: SETTING_TAB})
            }>
            {this._renderContent(SETTING_TAB)}
          </TabBarIOS.Item>
        </TabBarIOS>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
});
