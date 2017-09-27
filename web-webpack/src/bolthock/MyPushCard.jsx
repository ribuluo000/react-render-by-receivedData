import React from 'react';

import MyButton from '../bolthock/MyButton';
import MyText from '../bolthock/MyText';
import MyView from '../bolthock/MyView';
import MyPushCardText from '../bolthock/MyPushCardText';
import MyPushCardInput from '../bolthock/MyPushCardInput';
import MyPushCardSelect from '../bolthock/MyPushCardSelect';
import MyPushCardDatePicker from '../bolthock/MyPushCardDatePicker';

import {cityData} from '../bolthock/MyBolthockUtil';

import moment from 'moment';
let zhNow = moment().locale('zh-cn').utcOffset(8);


export default class MyPushCard extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        bolthockMsg:this.props.bolthockMsg,
    };
  }
    static propTypes = {
        onClick: React.PropTypes.func, //

    };

    static defaultProps = {
        onClick: () => {
        },
    };




  onClickSubmit(){
    console.log(this.state.bolthockMsg);

    let response = {};
    response.code = '1';
    response.error_msg = 'success';
    response.keychain = this.state.bolthockMsg.keychain;
    let data = [];
    if(this.state.bolthockMsg.actionSheet
      &&this.state.bolthockMsg.actionSheet.length>0

      ){
        data.push(this.state.bolthockMsg.actionSheet);

    }

    response.data = data;

    console.log(response);

  }


  getViewActionItem(action, i){
    console.log(action);

    let v = null;
    let viewAction = null;
    if(action.widgetName == 'text'){

      viewAction = (
        <MyPushCardText title={action.title} subTitle={action.subTitle}/>

        );

    }else if(action.widgetName == 'input'){
      viewAction = (
        <MyPushCardInput title={action.title} subTitle={action.subTitle}
        mInputDefaultValue={action.value}
        onChange={(v)=>{
console.log(action);
          action.value = v;
console.log(action);
        }}

        />

        );

    }else if(action.widgetName == 'select'){

      let data=[ {
      label: '2013',
      value: '20131',
    },
    {
      label: '2014',
      value: '20141',
    },];

      let selectedValue=['20141'];


      data = [];
      for(let i=0;i<action.selectOptions.length;i++){
        let item = action.selectOptions[i];
        let newItem={label:item,value:item};
        data.push(newItem);

      }

      selectedValue = [action.default];

      action.data = data;
      action.selectedValue = selectedValue;


      viewAction = (
        <MyPushCardSelect 
        title={action.title} 
        data={action.data} 
        cols = {1}
        selectedValue={action.selectedValue}
        onChange={(v)=>{
console.log(action.selectedValue);
          action.selectedValue = v;
console.log(action.selectedValue);
        }}
        />

        );

    }else if(action.widgetName == 'datepicker'){
      let selectedValue=null;

      selectedValue = zhNow;
      action.selectedValue = selectedValue;


      viewAction = (
        <MyPushCardDatePicker 
        mode='date' 
        title={action.title}
        subTitle={action.subTitle}
        selectedValue={action.selectedValue}
        onChange={(v)=>{
console.log(action.selectedValue);
          action.selectedValue = v;
console.log(action.selectedValue);

          action.value = v.format("YYYY-MM-DD");//data为日期的字符串形式
          console.log(action.value);
        }}
        />

        );

    }else if(action.widgetName == 'timepicker'){
      let selectedValue=null;

      // selectedValue = zhNow;
      action.selectedValue = selectedValue;


      viewAction = (
        <MyPushCardDatePicker 
        mode='time' 
        title={action.title}
        subTitle={action.subTitle}
        minuteStep={1}
        selectedValue={action.selectedValue}
        onChange={(v)=>{
console.log(action.selectedValue);
          action.selectedValue = v;
console.log(action.selectedValue);

          action.value = v.format("HH:mm");//data为日期的字符串形式
          console.log(action.value);
        }}
        />

        );

    }else if(action.widgetName == 'datetimepicker'){
      let selectedValue=null;

      selectedValue = zhNow;
      action.selectedValue = selectedValue;


      viewAction = (
        <MyPushCardDatePicker 
        mode='datetime' 
        title={action.title}
        subTitle={action.subTitle}
        minuteStep={1}
        selectedValue={action.selectedValue}
        onChange={(v)=>{
console.log(action.selectedValue);
          action.selectedValue = v;
console.log(action.selectedValue);

          action.value = v.format("HH:mm");//data为日期的字符串形式
          console.log(action.value);
        }}
        />

        );

    }else if(action.widgetName == 'citypicker'){
      let selectedValue=null;

      // selectedValue = zhNow;
      action.selectedValue = selectedValue;

      viewAction = (
        <MyPushCardSelect
        cols={3}
        data={cityData}
        title={action.title}
        subTitle={action.subTitle}
        selectedValue={action.selectedValue}
        onChange={(v)=>{
console.log(action.selectedValue);
          action.selectedValue = v;
console.log(action.selectedValue);
        }}
        />

        );

    }


    v = (
      <MyView key={`action_${i}`}>
        {viewAction}
      </MyView>

      );

    return v;
  }


  getViewPushCard(bolthockMsg){
    console.log(bolthockMsg);
    if(!bolthockMsg){
      return null;

    }

    let v = null;

    let viewSubmit = null;
    let viewActionSheet = null;

      if(bolthockMsg.msgType == 'pushCard'){

        viewSubmit = (
          <MyButton onClick={()=>{
      this.onClickSubmit();
      }}>{bolthockMsg.pushCard.submitButtonText}</MyButton>

          );

        if(bolthockMsg.actionSheet
          && bolthockMsg.actionSheet.length>0

          ){

          viewActionSheet = (
          <MyView>
                {bolthockMsg.actionSheet.map((action, i) => {
                    return this.getViewActionItem(action, i);
                })}
          </MyView>
            );


        }

      }else{

      }
      v = (
        <MyView>
          {viewSubmit}
          {viewActionSheet}

        </MyView>
        );

    return v;


  }

  render() {
    let v = this.getViewPushCard(this.props.bolthockMsg);
    return (v);
  }
}