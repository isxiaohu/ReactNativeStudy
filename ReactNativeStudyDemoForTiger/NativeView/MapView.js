import React,{Component} from 'react';
import {PropTypes,Alert} from 'react-native';
var {requireNativeComponent} = require('react-native');
var MyMap = requireNativeComponent('MyMap', MapView);

export default class MapView extends Component {
  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event: Event){
    if(!this.props.onRegionChange){
      console.log('你妹啊');
      return;
    }
    this.props.onRegionChange(event.nativeEvent.region.latitude);
  }
  static propTypes = {
    pitchEnabled: React.PropTypes.bool,
    region: React.PropTypes.shape({
      /**
       * 地图中心点的坐标。
       */
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired,
      /**
       * 最小/最大经、纬度间的距离。
       */
      latitudeDelta: React.PropTypes.number.isRequired,
      longitudeDelta: React.PropTypes.number.isRequired,
    }),
    onRegionChange: React.PropTypes.func,
  };

  render() {
    return <MyMap {...this.props} onChange={this._onChange} />;
  }
}
