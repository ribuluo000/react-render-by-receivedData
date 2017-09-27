import React from 'react';
import {
  SearchBar, Tabs, Steps,
} from 'antd-mobile';

import MyButton from '../bolthock/MyButton';
import MyText from '../bolthock/MyText';
import MyView from '../bolthock/MyView';
import MyPushCardText from '../bolthock/MyPushCardText';
import MyPushCardInput from '../bolthock/MyPushCardInput';
import MyPushCardSelect from '../bolthock/MyPushCardSelect';

import MyPushCard from '../bolthock/MyPushCard';
import {requestData} from '../bolthock/MyBolthockUtil';




const TabPane = Tabs.TabPane;

// const requestData = {
//   "authorName": "Stack",                          // 消息发送者的姓名，如果留空将显示为配置中的聚合标题 
//   "title": "Winter is coming",                    // 聚合消息标题 
//   "text": "",                                     // 聚合消息正文 
//   "redirectUrl": "https://your.site",             // 跳转链接，仅在type = link 时起效
//   "imageUrl": "http://your.image.url",            // 消息中可添加一张预览图片，仅在type = link 时起效 
  
//   /**二级向外兼容，可能一些第三方应用不支持*/
//   "authorAvatar": "http://your.image.url",        // 消息发送者的头像图片，支持图片和svg格式
//   "msgType": "pushCard",                          // 支持：文本text、富文本richText、图文链接link、消息卡pushCard、voice、video
//   "mediaResourceUrl":"",                             // 媒体型消息资源
  
//   "topic":"接单",                                   // 话题归类
  
//   /*Pardpush特有，type类型必须是pushCard才有效*/ 
//   "keychain":{                                    // 回调设置 
//       "access_token" :"",                         // 回调时鉴权用Token
//       "method" :"POST",                           // 回调提交模式
//       "context":{                                 // 回调返回的上下文，结构自定义，非必须 
//           "orderID":"",
//           "contactID":"",
          
//           /*Pardpush need*/           
//           "YPKey":"",            
//           "eventKeys":[]           
//       }
//   }, 

//   "pushCard":{                                     // 消息卡设置
//       "submitButtonText" :"保存",                   // 提交按钮文字
//       "submittingText" :"提交中，请稍后",            // 提交中提示
//       "submitCallbackUrl" :"http://your.site",     // 回调url
//       "buttons":[                                  // 其他按钮组
//            {
//                "text":"申请移交",
//                "callbackUrl" :"http://your.site/handover"
//            },
//            {
//                "text":"取消",
//                "callbackUrl" :"http://your.site/cancel"
//            }
//        ]
//   },
  
//   "actionSheet":[                                 // 交互操作界面 
//      { 
//           "widgetName" :"select",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
//           "title" :"性别",                         // 显示的标题
//           "subTitle" :"请选择",                    // 显示的副标题，非必须
//           "valueKey" : "gender",                  // 字段名称 
//           "YPKey" : "YPContactGender",            // 优豹字段名称，非必须  
//           "selectOptions" : ["male","female"],    // 选择器的选择项，仅选择器可用 
//           "default" : "male",                     // 默认值，非必须 
//           // "data":[ {
//           //   label: '2013',
//           //   value: '20131',
//           // },
//           // {
//           //   label: '2014',
//           //   value: '20141',
//           // },],
//           // selectedValue:['20141'],
//           "validator":[
//               {
//                   "rule":"range",
//                   "value":"6,30",
//                   "error":"密码长度必须大于等于6，小于30"
//               }
//           ]
//      },
//       { 
//           "widgetName" :"input",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
//           "title" :"姓名",                         // 显示的标题
//           "subTitle" :"",                    // 显示的副标题，非必须
//           "valueKey" : "name",                  // 字段名称 
//           "value":"王超",
//           "YPKey" : "YPContactGender"            // 优豹字段名称，非必须  
//      },
//       { 
//           "widgetName" :"input",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
//           "title" :"年龄",                         // 显示的标题
//           "subTitle" :"",                    // 显示的副标题，非必须
//           "valueKey" : "age",                  // 字段名称 
//           "value":"66",
//           "YPKey" : "YPContactGender"            // 优豹字段名称，非必须  
//      },
//       { 
//           "widgetName" :"text",                 // 控件类型:text、textarea、select、datepicker、timepicker、citypicker、phone...
//           "title" :"性别",                         // 显示的标题
//           "subTitle" :"male",                    // 显示的副标题，非必须
//           "valueKey" : "gender",                  // 字段名称 
//           "YPKey" : "YPContactGender"            // 优豹字段名称，非必须  
//      }
//   ] 

// };


export default class Stage4 extends React.Component {


  constructor(props) {
    super(props);
  
    this.state = {
      bolthockMsg:requestData,
    };
  }

  componentDidMount() {
    this.props.changeTitle('Stage 4 bolthockMsg');
  }

  onClickBoltHockPushCard(){
  console.log(123);
  console.log(requestData);
  console.log(requestData.msgType);
  this.setState({
    bolthockMsg:requestData,
  });


    console.log(this);
    console.log(this.refs);
    console.log(this.props);
    // console.log(ReactDOM.findDOMNode(this.refCb));

  }

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
        for(let i=0;i<this.state.bolthockMsg.actionSheet.length;i++){
          

        }

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
        <MyPushCardSelect title={action.title} data={action.data} 
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

  getReceivedView(bolthockMsg){
    console.log(bolthockMsg);
    if(!bolthockMsg){
      return null;

    }

    let v = (
      <MyView>
        <MyText style={{display: 'flex', alignItems: 'center', justifyContent: 'center',color:'red', padding:'10'}}  onClick={()=>{
      this.onClickBoltHockPushCard();
      }}>testEnd</MyText>
      </MyView>

      );

    let viewSubmit = null;
    let viewActionSheet = null;

      if(requestData.msgType == 'pushCard'){

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
    let v = this.getReceivedView(this.state.bolthockMsg);
    return (<MyView style={{ marginBottom: 30 }}>

      <SearchBar placeholder="搜索" />
      <MyText style={{display: 'flex', alignItems: 'center', justifyContent: 'center',color:'red', padding:'10'}}  onClick={()=>{
      this.onClickBoltHockPushCard();
      }}>testStart</MyText>
      <MyButton onClick={()=>{
      this.onClickBoltHockPushCard();
      }}>BoltHockPushCardMyButton</MyButton>
      <MyText style={{display: 'flex', alignItems: 'center', justifyContent: 'center',color:'red', padding:'10'}}  onClick={()=>{
      this.onClickBoltHockPushCard();
      }}>testEnd</MyText>
      {v}
      <MyPushCard bolthockMsg={this.state.bolthockMsg}/>

    </MyView>);
  }
}




