import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Box from './Box';

export default class BoxBottom extends Component {
  render() {
    return (
      <View style={styles.boxItem}>
        <Box />
        <Box />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxItem: {
    flex: 1,
  },
});
