import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Child from './Child';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      name: 'Show',
    };
    // this.countNumber = this.countNumber.bind(this);
    // console.log('constructor');
  }

  // renderText = () => <Text> textInComponent </Text>;
  renderText() {
    return <Text> textInComponent </Text>;
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount');
  // }

  componentDidMount() {
    // setTimeout(() => {
    //   const userName = 'RN-02';
    //   this.setState({
    //     name: userName,
    //   });
    // }, 500);
    // console.log('componentDidMount');
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps');
    return null;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   if (nextState.number > 4) {
  //     return true;
  //   }
  //   return false;
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   if (this.state.number < 5) {
  //     this.setState({number: 6});
  //   }
  // }

  countNumber = () => {
    console.log(this);
    this.setState({number: this.state.number + 1});
  };

  render() {
    console.log('render');
    return (
      <View style={{marginTop: 50}}>
        {/* {this.renderText()} */}

        <Text> Number: {this.state.number} </Text>
        {/* <Text> Name: {this.state.name} </Text> */}
        <TouchableOpacity onPress={this.countNumber}>
          <Text>Count Up</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => this.setState({name: 'RN'})}>
          <Text>Set Name</Text>
        </TouchableOpacity>
        {this.state.name !== 'RN' && <Child name={this.state.name} />} */}
      </View>
    );
  }
}
