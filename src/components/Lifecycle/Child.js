import React, {Component, PureComponent} from 'react';
import {Text, View} from 'react-native';

export default class Child extends Component {
  // state = {Component
  //   number: 2,
  // };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('Child Props', props);
  //   console.log('Child state', state);
  //   if (props.total > state.number) {
  //     return (state.number = props.total);
  //   }

  //   return null;
  // }

  // UNSAFE_componentWillReceiveProps(props) {
  //   console.log('Child Props', props);
  //   if (props.total > this.state.number) {
  //     this.setState({
  //       number: props.total,
  //     });
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('run');
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render Child');
    return (
      <View>
        <Text> Child Name {this.props.name} </Text>
      </View>
    );
  }
}
