import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {COUNT_UP, countUp, countDown} from './redux/actions/countAction';

class DemoRedux extends Component {
  state = {
    numberState: 8,
  };

  countDown = () => {
    this.setState({numberState: this.state.numberState - 1});
  };

  // countUp = () => {
  //   //Cách 2 dispatch thông qua props
  //   this.props.dispatch(countUp(20));
  // };

  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Text> DemoRedux </Text>
        <Text style={styles.txtStyle}>Number: {this.props.number}</Text>
        <Text style={styles.txtStyle}>User Name: {this.props.userName}</Text>
        {/* <Text style={styles.txtStyle}>
          NumberState: {this.state.numberState}
        </Text> */}
        <View style={styles.btnContent}>
          <TouchableOpacity onPress={() => this.props.countUp(1)}>
            <Text>Count Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.countDown}>
            <Text>Count Down</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    fontSize: 24,
  },
  btnContent: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
});

const mapStateToProp = state => {
  return {
    number: state.countReducer.number,
    userName: state.userReducer.userName,
  };
};

const mapDispatchToProp = dispatch => {
  return {
    countUp: number => {
      console.log('Dispatch Param', number);
      dispatch(countUp(number));
    },
    countDown: () => {
      dispatch(countDown());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(DemoRedux);
