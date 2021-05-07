import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default class DemoFlatList extends Component {
  array = [{id: 1}, {id: 2}, {id: 2}, {id: 2}, {id: 2}, {id: 2}];

  ob = {a: 1, b: 2};

  renderItem = ({item}) => (
    <View
      style={[
        styles.item,
        {
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`,
        },
      ]}>
      <Text>Item {item.id}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={this.array}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
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
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
