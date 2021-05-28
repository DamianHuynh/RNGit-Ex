import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import axios from 'axios';
import ProductItem from './ProductItem';

export default class BaiTapLifecycle extends Component {
  state = {
    product: {},
    listProduct: [],
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://svcy3.myclass.vn/api/Product',
    })
      .then(res =>
        this.setState({
          product: res.data.content[0],
          listProduct: res.data.content,
        }),
      )
      .catch(error => console.log(error));
  }

  _renderItem = ({item}) => {
    return <ProductItem product={item} />;
  };

  render() {
    // console.log(this.state.product);

    return (
      <SafeAreaView style={styles.areaView}>
        <View style={styles.container}>
          {/* <ProductItem product={this.state.product} /> */}
          <FlatList
            contentContainerStyle={styles.listProduct}
            // style={styles.listProduct}
            horizontal={false}
            numColumns={2}
            data={this.state.listProduct}
            keyExtractor={(item, index) => `${item.name}_${index}`}
            renderItem={this._renderItem}
            // ItemSeparatorComponent={() => <View style={{height: 20}} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#dcf1f9',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listProduct: {
    // flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'space-around',
    // alignItems: 'flex-end',
  },
});
