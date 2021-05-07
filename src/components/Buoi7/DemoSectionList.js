import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  SectionList,
  TouchableHighlightBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class DemoSectionList extends Component {
  DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  renderItem = ({item}) => (
    <View style={styles.itemContent}>
      <Text style={styles.itemTxt}>{item}</Text>
    </View>
  );

  renderSectionHeader = ({section: {title}}) => {
    console.log(title);
    return (
      <Text style={styles.itemHeaderTxt}>
        {title}
        <Icon name="star" size={24} />
      </Text>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={this.DATA}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  itemContent: {
    padding: 15,
  },
  itemHeaderTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#bbb',
  },
  itemTxt: {
    fontSize: 20,
    backgroundColor: '#eee',
  },
});
