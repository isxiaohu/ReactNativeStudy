import React, { Component } from 'react';
import {
  AsyncStorage,AppRegistry,Dimensions,StyleSheet,Text,Button,View,Image,PropTypes,TouchableOpacity
} from 'react-native';
import ParallaxView from 'react-native-parallax-view';
import NavigationBar from 'react-native-navigation-bar';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var itemWidth = width - 30;

export default class CourseDetail extends Component{
  constructor(props){
    super(props);
  }

  pressLeftBtn(){
    const { navigator } = this.props;
    if(navigator){
			navigator.pop();
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <View style = {styles.toolBar}>
          <TouchableOpacity onPress={this.pressLeftBtn.bind(this)}>
            <Image style={styles.leftIcon} source={require('../images/icon_back.png')}/>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>课程详情</Text>
        </View>
        <ParallaxView
          style={styles.parallaxView}
          backgroundSource={require('../images/banner/banner.png')}
          windowHeight={250}
          header={(
            <Text>  </Text>
          )}
          scrollableViewStyle={{ backgroundColor: 'white'}}>
          <Text style={styles.courseName}>移动开发高级培训课程</Text>
          <View style={styles.timeAndPrice}>
              <Text>60课时(60分钟一课时)</Text>
              <View style={{flex:1}}/>
              <Text style={styles.price}>￥16800</Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.listItem}>
              <Image style = {styles.listItemIcon} source={require('../images/gailun.jpeg')}/>
              <View>
                <Text style = {styles.listItemTitle}>盖伦</Text>
                <Text style = {styles.comment}>React Native 从入门到放弃，老师讲得很好~</Text>
              </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.listItem}>
              <Image style = {styles.listItemIcon} source={require('../images/gailun.jpeg')}/>
              <View>
                <Text style = {styles.listItemTitle}>盖伦</Text>
                <Text style = {styles.comment}>React Native 从入门到放弃，老师讲得很好~</Text>
              </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.listItem}>
              <Image style = {styles.listItemIcon} source={require('../images/gailun.jpeg')}/>
              <View>
                <Text style = {styles.listItemTitle}>盖伦</Text>
                <Text style = {styles.comment}>React Native 从入门到放弃，老师讲得很好~</Text>
              </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.listItem}>
              <Image style = {styles.listItemIcon} source={require('../images/gailun.jpeg')}/>
              <View>
                <Text style = {styles.listItemTitle}>盖伦</Text>
                <Text style = {styles.comment}>React Native 从入门到放弃，老师讲得很好~</Text>
              </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.listItem}>
              <Image style = {styles.listItemIcon} source={require('../images/gailun.jpeg')}/>
              <View>
                <Text style = {styles.listItemTitle}>盖伦</Text>
                <Text style = {styles.comment}>React Native 从入门到放弃，老师讲得很好~</Text>
              </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.listItem}>
              <Image style = {styles.listItemIcon} source={require('../images/gailun.jpeg')}/>
              <View>
                <Text style = {styles.listItemTitle}>盖伦</Text>
                <Text style = {styles.comment}>React Native 从入门到放弃，老师讲得很好~</Text>
              </View>
          </View>
        </ParallaxView>
        <View style={styles.footView}>
          <Text style={styles.call}>电话咨询</Text>
          <Text style={styles.buy}>立即购买</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  toolBar:{
    marginTop:20,
    width:width,
    height:44,
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'#ffffff',
  },
  leftIcon:{
    width:15,
    height:26,
    marginLeft:15,
  },
  pageTitle:{
    flex:1,
    fontSize:18,
    fontWeight: 'bold',
    marginRight:30,
    textAlign:'center',
  },
  rightIcon:{
    flex:1,
  },
  parallaxView:{
    marginBottom:45,
  },
  courseName:{
    fontSize:16,
    color:'#505050',
    fontWeight: 'bold',
    marginTop:10,
    marginLeft:15,
    marginBottom:10,
  },
  timeAndPrice:{
    alignItems: 'center',
    width:itemWidth,
    flexDirection:'row',
    paddingLeft:15,
  },
  time:{

  },
  price:{
    fontSize:18,
    color:'#bb445c',
    marginRight:15,
  },
  footView:{
    position:'absolute',
    left:0,
    bottom:0,
    flexDirection:'row',
    backgroundColor:'#808080',
    width:width,
    height:45,
  },
  call:{
    paddingTop:12,
    textAlign:'center',
    fontSize:18,
    fontWeight: 'bold',
    flex:3,
    height:45,
  },
  buy:{
    paddingTop:12,
    textAlign:'center',
    fontSize:18,
    fontWeight: 'bold',
    backgroundColor:'#3cc4a9',
    flex:7,
    height:45,
  },
  listItem:{
    alignItems: 'center',
    flexDirection:'row',
    borderRadius:5,
  },

  listItemIcon:{
    width:40,
    height:40,
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,
  },
  listItemTitle:{
    marginTop:8,
    marginBottom:5,
  },
  comment:{
    fontSize:12,
  },
  line:{
    marginTop:5,
    marginLeft:15,
    height:1,
    width:width - 30,
    backgroundColor:"#eaeaea"
  },
});
