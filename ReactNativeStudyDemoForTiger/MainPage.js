
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

const HOME_TAB = 'home_tab';

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
      renderView = <Home/>
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
            selected={this.state.selectedTab === HOME_TAB}>
            {this._renderContent(HOME_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = "首页"
            icon={require('./images/icon_home_nor.png')}
            selected={this.state.selectedTab === HOME_TAB}>
            {this._renderContent(HOME_TAB)}
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
