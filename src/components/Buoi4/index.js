import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import BoxBottom from './BoxBottom';
import ItemTop from './ItemTop';

const Buoi4 = () => {
  const textAvatar = 'React Native 02 -- Cao Thắng';
  const iShowHide = false;
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        {/* Lấy hình từ network hoặc API */}
        {iShowHide ? (
          <Image
            style={[styles.Image, createBorder(11, 'red')]}
            source={require('./unnamed.jpeg')}
          />
        ) : (
          <Text>Image Hidden</Text>
        )}
        {/* <Image
          style={[styles.Image, createBorder(11, 'red')]}
          source={require('./unnamed.jpeg')}
        />
        <Text style={styles.TextAvatar}>{textAvatar}</Text> */}
      </View>
      <View style={styles.line} />
      <View style={styles.boxBottom}>
        <BoxBottom />
        <BoxBottom />
      </View>
    </View>
  );
};

//
const createBorder = (width, color) => ({
  borderWidth: width,
  borderColor: color,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextAvatar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  line: {
    flex: 1,
  },
  boxTop: {
    backgroundColor: '#A1c99A',
    flex: 20,
    borderRadius: 20,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxBottom: {
    backgroundColor: '#c8c8fA',
    flex: 20,
    borderRadius: 20,
    paddingBottom: '10%',
    flexDirection: 'row',
  },
});
export default Buoi4;
