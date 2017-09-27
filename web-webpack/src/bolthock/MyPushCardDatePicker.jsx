import React from 'react';
import {
  Text, 
  View,
} from 'antd-mobile';
import MyDatePicker from './MyDatePicker';


export default class MyPushCardDatePicker extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedValue:this.props.selectedValue,
    };
  }

    static propTypes = {
      title:React.PropTypes.string,
      selectedValue:React.PropTypes.array,
      data:React.PropTypes.array,
      mInputDefaultValue:React.PropTypes.string,
      myRef:React.PropTypes.string,
      onClick: React.PropTypes.func, //
      onChange: React.PropTypes.func, //


    };

    static defaultProps = {
      mode:'time',
      minuteStep:1,
      title:'时间选择器',
      data:[ {
      label: '2013',
      value: '20131',
    },
    {
      label: '2014',
      value: '20141',
    },],
      selectedValue:['20141'],
      myRef:'r'+new Date().getTime(),
        onClick: () => {
        },

        onChange: () => {
        },
    };


  render() {
    return (
      <MyDatePicker {...this.props}/>

      );
  }
}