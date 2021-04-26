import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class IconButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <TouchableOpacity style={styles.ButtonIcon}>
        {/* <Image
          style={styles.ButtonIcon}
          source={require('../../assets/images/love.png')}
        /> */}
        <Text style={styles.TextIcon}>{this.props.icon}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ButtonIcon: {
    marginHorizontal: 5,
    height: 50,
    width: 50,
  },
  TextIcon: {
    fontSize: 20,
  },
});
