import React,{ PropTypes,Component } from 'react';
import { requireNativeComponent, View} from 'react-native';
var TigerView = requireNativeComponent('TigerView', TigerCustomView);
export default class TigerCustomView extends Component{
  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event: Event){
    console.log('=====================虎爷无敌')
    if(!this.props.onChangeMessage){
      return;
    }
    this.props.onChangeMessage(event.nativeEvent.message);
  }
  render() {
    return <TigerView {...this.props} onChange={this._onChange} />;
  }

  static propTypes = {
    bg:React.PropTypes.string,
    onChangeMessage: React.PropTypes.func,
    ...View.propTypes
  }
}

// TigerCustomView.propTypes = {
//   onChangeMessage: React.PropTypes.func,
// }
//
// var inface ={
//  name:'TigerCustomView',
//  propTypes:{
//    bg:PropTypes.string,
//    ...View.propTypes
//  }
// }
