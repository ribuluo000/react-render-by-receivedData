import React from 'react';
import {
  DatePicker, List
} from 'antd-mobile';
// https://mobile.ant.design/components/date-picker-cn/
export default class MyDatePicker extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedValue:this.props.selectedValue,
    };
  }
    static propTypes = {
      title:React.PropTypes.string,
      subTitle:React.PropTypes.string,
      onClick: React.PropTypes.func, //

    };

    static defaultProps = {
      title:'',
      subTitle:'请选择',
      onClick: () => {},
    };

  render() {
    return (
      <DatePicker {...this.props} 
      value={this.state.selectedValue}
      extra={this.props.subTitle}
      onChange={(v)=>{
        this.setState({selectedValue:v});
        this.props.onChange(v);}}>
          <List.Item 
            style={{
              paddingLeft: '20',paddingRight: '20', paddingTop: '10',paddingBottom: '10',
              flex:1,
            }}
          arrow="horizontal">{this.props.title}</List.Item>
        </DatePicker>
      );
  }
}