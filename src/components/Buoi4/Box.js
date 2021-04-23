import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Box extends Component {
  render() {
    return <View style={styles.itemBottom} />;
  }
}

const styles = StyleSheet.create({
  itemBottom: {
    backgroundColor: '#4f82c0',
    flex: 1,
    borderRadius: 20,
    margin: 5,
  },
});
