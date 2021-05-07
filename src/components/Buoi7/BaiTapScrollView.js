import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

export default class BaiTapScrollViewHome extends Component {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  renderItem = () => {
    return this.array.map((item, index) => {
      return (
        <View
          style={[
            styles.item,
            {
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215,
              ).toString(16)}`,
            },
          ]}
          key={index}>
          <Text>Item {item}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>{this.renderItem()}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  item: {
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
