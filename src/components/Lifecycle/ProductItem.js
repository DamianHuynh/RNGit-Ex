import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth} = Dimensions.get('window');

export default class ProductItem extends Component {
  render() {
    console.log(this.props.product.id);
    return (
      <View style={[styles.productItem, styles.productItemFlexEnd]}>
        <View style={styles.productItemHeader}>
          <View style={styles.productPriceLeftContent}>
            <MatIcon name="attach-money" size={18} />
            <Text style={styles.productPriceText}>
              {this.props.product.price}
            </Text>
          </View>
          <AntIcon name="heart" color="red" size={20} />
        </View>
        <Image
          source={{uri: this.props.product.image}}
          style={styles.productImage}
        />
        <Text style={styles.productName}> {this.props.product.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: (screenWidth - 80) / 2,
    height: 200,
    paddingHorizontal: 8,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  productItemFlexEnd: {
    // alignSelf: 'flex-end',
  },
  productItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPriceLeftContent: {
    flexDirection: 'row',
  },
  productPriceText: {
    fontWeight: 'bold',
  },
  productImage: {
    width: 140,
    height: 110,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '400',
  },
});
