import React from 'react';
import {
  Text, 
  View,
} from 'antd-mobile';


export default class MyPushCardText extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func, //

    };

    static defaultProps = {
        onClick: () => {
        },
    };

  render() {
    return (
      <View style={{display: 'flex',
      flexDirection: 'row', paddingLeft: '20',paddingRight: '20', paddingTop: '10',paddingBottom: '10',
      backgroundColor: '#ffffff',
    }}>
        <Text style={{flex:1, textAlign: 'left',}}>{this.props.title}</Text>
        <Text style={{flex:2, textAlign: 'right',}}>{this.props.subTitle}</Text>
      </View>

      );
  }
}