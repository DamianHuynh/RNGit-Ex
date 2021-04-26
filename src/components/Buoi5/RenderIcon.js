import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import IconButton from './IconButton';

export default class RenderIcon extends Component {
  state = {
    icon: require('../../assets/images/love.png'),
  };
  handleOnPressIcon = icon => {
    this.setState({icon});
  };

  render() {
    return (
      <View style={styles.Container}>
        <Image source={this.state.icon} />
        <View style={styles.ButtonContainer}>
          <IconButton icon={'angry'} />
          <IconButton icon={'love'} />
          <IconButton icon={'like'} />
          <IconButton icon={'haha'} />
          <IconButton icon={'sad'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
  ButtonIcon: {
    marginHorizontal: 5,
    height: 50,
    width: 50,
  },
});
