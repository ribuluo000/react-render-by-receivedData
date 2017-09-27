import React from 'react';
import {
  Text, 
  View,
  TextareaItem,
} from 'antd-mobile';


export default class MyPushCardInput extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

    static propTypes = {
      mInputDefaultValue:React.PropTypes.string,
      myRef:React.PropTypes.string,
        onClick: React.PropTypes.func, //
        onChange: React.PropTypes.func, //


    };

    static defaultProps = {
      mInputDefaultValue:'',
      myRef:'r'+new Date().getTime(),
        onClick: () => {
        },

        onChange: () => {
        },
    };

    refCb(instance){
        console.log(instance);
      }

  render() {
    return (
      <View style={{display: 'flex',
      flexDirection: 'row', paddingLeft: '20',paddingRight: '20', paddingTop: '10',paddingBottom: '10',
      backgroundColor: '#ffffff',
    }}>
        <Text style={{flex:1, textAlign: 'left',}}>{this.props.title}</Text>
        <TextareaItem ref={this.refCb} style={{flex:2, textAlign: 'right', borderBottomWidth: 0,}} 
        onChange = {(v)=>{

console.log(v);
          this.props.onChange(v);}} defaultValue={this.props.mInputDefaultValue} />
      </View>

      );
  }
}