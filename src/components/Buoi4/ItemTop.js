import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ItemTop extends Component {
  render() {
    return (
      <View style={styles.itemTop}>
        <Text> Item Top </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemTop: {
    backgroundColor: '#ffffc2',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
