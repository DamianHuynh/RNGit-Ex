import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class RenderWithState extends Component {
  //c1: sử dụng constructor để khai báo state
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  //C2: Khai báo state rút gọn
  // state = {
  //  isLogin: false,
  // };

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      //log ra được giá trị sau hàm setState đươc thực thi
      () => {
        console.log(this.state.isLogin);
      },
    );
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <>
          <Text style={styles.TextStyle}>Hello React Native 02</Text>
          <TouchableOpacity style={styles.Button} onPress={this.handleLogout}>
            <Text style={styles.TextStyle}>Log out</Text>
          </TouchableOpacity>
        </>
      );
    }
    return (
      <TouchableOpacity style={styles.Button} onPress={this.handleLogin}>
        <Text style={styles.TextStyle}>Log in</Text>
      </TouchableOpacity>
    );
  };

  render() {
    console.log('render');

    return <View style={styles.Container}>{this.renderLogin()}</View>;
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#bbf',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
