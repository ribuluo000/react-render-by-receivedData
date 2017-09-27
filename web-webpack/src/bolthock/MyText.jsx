import React from 'react';
import {
  Text, 
} from 'antd-mobile';


export default class MyText extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func, //

    };

    static defaultProps = {
        onClick: () => {
        },
    };

  render() {
    return (<Text {...this.props}/>);
  }
}