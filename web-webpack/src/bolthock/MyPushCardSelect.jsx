import React from 'react';
import {
  Text, 
  View,
  Picker,
  List,
} from 'antd-mobile';


export default class MyPushCardSelect extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedValue:this.props.selectedValue,
    };
  }

    static propTypes = {
      title:React.PropTypes.string,
      cols:React.PropTypes.number,
      selectedValue:React.PropTypes.array,
      data:React.PropTypes.array,
      mInputDefaultValue:React.PropTypes.string,
      myRef:React.PropTypes.string,
        onClick: React.PropTypes.func, //
        onChange: React.PropTypes.func, //


    };

    static defaultProps = {
      title:'',
      cols:1,
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



    // 1. 必须在componentWillReceiveProps(nextProps)生命周期中接受传递的参数
    // 2. 该生命周期方法中的参数必须叫做nextProps
    // 3. 所有传递过来的参数都包含在nextProps参数中
    // 4. 以nextProps.PARAM_NAME的方式获取指定的参数
    componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }

  render() {
    return (
      <View>

        <Picker
        data={this.props.data} cols={this.props.cols} className="forss" 
        onChange = {(v)=>{
          //im 切换显示数据
          console.log(v);
          this.setState({
            selectedValue:v,
          });
          this.props.onChange(v);}} 
          value={this.state.selectedValue}

        >
          <List.Item 
            style={{
              paddingLeft: '20',paddingRight: '20', paddingTop: '10',paddingBottom: '10',
              flex:1,
            }}
           arrow="horizontal">{this.props.title}</List.Item>
          </Picker>
      </View>

      );
  }
}