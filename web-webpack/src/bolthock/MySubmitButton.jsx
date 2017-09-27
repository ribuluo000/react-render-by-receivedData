import React from 'react';
import {
  Button, 
} from 'antd-mobile';


export default class MySubmitButton extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func, //

    };

    static defaultProps = {
        onClick: () => {
        },
    };

  render() {
    return (<Button {...this.props} onClick={()=>{
      this.props.onClick();
      }}/>);
  }
}