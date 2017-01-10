import React, { Component } from 'react';
import {
  AppRegistry,Dimensions,StyleSheet,Text,ScrollView,View,Image,TouchableOpacity
} from 'react-native';
import { NativeModules } from 'react-native';
var width = Dimensions.get('window').width; //full width
var itemWidth = width - 60;
var cancelLetf = (width - 72)/2;
var height = Dimensions.get('window').height; //full height
export default class Persinal extends Component {
  constructor(props){
    super(props);
  }

  goPhotoList(){
    // const { navigator } = this.props;
    //   if(navigator){
    //     navigator.push({
    //       name: 'PhotoList',
    //       component: PhotoList,
    //     });
    //   }
  }

  render(){
    return (
      <View style = {styles.parent}>
        <ScrollView style = {styles.scroll}>
          <View style={styles.container}>

            <Image style={styles.avatar} source={require('../../images/lutu/avatar.jpg')}/>

            <Text style={styles.name}>农家小炒肉</Text>

            <TouchableOpacity style={styles.item} onPress = {this.goPhotoList.bind(this)}>
              <View style={styles.item}>
                <Text style={styles.title}>个人信息</Text>
                <View style={styles.empty}/>
                <Image style={styles.icon} source={require('../../images/lutu/personal_photo.png')}/>
              </View>
            </TouchableOpacity>
            <View style = {styles.line}/>

            <View style={styles.item}>
              <Text style={styles.title}>设置</Text>
              <View style={styles.empty}/>
              <Image style={styles.icon} source={require('../../images/lutu/personal_setting.png')}/>
            </View>
            <View style = {styles.line}/>

            <View style={styles.item}>
              <Text style={styles.title}>订单</Text>
              <View style={styles.empty}/>
              <Image style={styles.icon} source={require('../../images/lutu/personal_capacity.png')}/>
            </View>
            <View style = {styles.line}/>

            <View style={styles.item}>
              <Text style={styles.title}>关于</Text>
              <View style={styles.empty}/>
              <Image style={styles.icon} source={require('../../images/lutu/personal_about.png')}/>
            </View>
            <View style = {styles.line}/>

            <View style={styles.item}>
              <Text style={styles.title}>账号绑定</Text>
              <View style={styles.empty}/>
              <Image style={styles.icon} source={require('../../images/lutu/personal_bind.png')}/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent:{
    width:width,
    height:height,
    backgroundColor:"#ffffff",
  },
  scroll:{
    width:width,
    height:height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar:{
    marginTop:80,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"#201338"
  },
  name:{
    marginTop:16,
    marginBottom:46,
    fontSize:18,
    color:"#000000"
  },
  item:{
    alignItems: 'center',
    width:itemWidth,
    height:50,
    flexDirection:'row',
  },
  title:{
    fontSize:17,
    color:"#292929"
  },
  empty:{
    flex:1,
  },
  icon:{
    width:26,
    height:26,
  },
  line:{
    height:1,
    width:itemWidth,
    backgroundColor:"#eaeaea"
  },
  back:{
    left:cancelLetf,
    bottom:40,
    width:72,
    height:72,
  },
  backBtn:{
    width:72,
    height:72,
  }
});
