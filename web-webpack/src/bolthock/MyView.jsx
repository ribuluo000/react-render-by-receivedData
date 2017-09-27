import React from 'react';
import {
  View,
} from 'antd-mobile';

export default class MyView extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func, //

    };

    static defaultProps = {
        onClick: () => {
        },
    };

  render() {
    return (<View {...this.props}/>);
  }
}