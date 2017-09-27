import React from 'react';
import MyView from '../bolthock/MyView';

import MyPushCard from '../bolthock/MyPushCard';
import {requestData} from '../bolthock/MyBolthockUtil';


export default class Stage5 extends React.Component {


  constructor(props) {
    super(props);
  
    this.state = {
      bolthockMsg:requestData,
    };
  }

  componentDidMount() {
    this.props.changeTitle('Stage 5 bolthockMsg');
  }
  render() {
    return (<MyView style={{ marginBottom: 30 }}>
      <MyPushCard bolthockMsg={this.state.bolthockMsg}/>

    </MyView>);
  }
}




