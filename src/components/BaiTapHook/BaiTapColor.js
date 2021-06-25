import React from 'react';
import {View, StyleSheet} from 'react-native';
import useRandomColor from './useRandomColor';

const BaiTapColor = () => {
  const backgroundColor = useRandomColor('red');
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor}]} />
    </View>
  );
};

export default BaiTapColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
});
