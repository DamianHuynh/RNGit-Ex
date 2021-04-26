//rnc: cú pháp tạo class component
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Touched extends Component {
  handleOnPress = param => {
    console.log(param);
  };

  render() {
    return (
      <View style={styles.Container}>
        <Text> textInComponent </Text>
        <TouchableOpacity
          style={styles.Button}
          //Không truyền params
          // onPress={this.handleOnPress}
          // Sử dụng callback function để truyền param
          onPress={() => {
            this.handleOnPress('RN02');
          }}>
          <Text style={styles.TxtButton}>Button</Text>
        </TouchableOpacity>
        {/* <TouchableHighlight
          underlayColor="red"
          style={styles.Button}
          onPress={this.handleOnPress}>
          <Text style={styles.TxtButton}>Button Highlight</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback
          style={styles.Button}
          onPress={this.handleOnPress}>
          <Text style={styles.TxtButton}>Button Without Feedback</Text>
        </TouchableWithoutFeedback> */}
      </View>
    );
  }
}

//rns: cú pháp tạo nhanh styles
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#bfb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  TxtButton: {
    fontSize: 20,
  },
});
