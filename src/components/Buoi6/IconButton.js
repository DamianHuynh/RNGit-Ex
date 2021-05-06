import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class IconButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressIcon(this.props.image)}
        style={styles.ButtonIcon}>
        <Image style={styles.ButtonIcon} source={this.props.image} />
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
});
