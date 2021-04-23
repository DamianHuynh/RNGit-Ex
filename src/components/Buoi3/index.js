import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Buoi3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Horizon}>
          <View style={[styles.box, styles.colorBox1]}>
            <View>
              <Text style={{}}>Purple</Text>
            </View>
          </View>
          <View style={[styles.box, styles.colorBox2]} />
        </View>

        <View style={[styles.box, styles.colorBox3]} />
        <View style={[styles.box, styles.colorBox4]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    // paddingBottom: 50,
    paddingVertical: 50,
    // paddingLeft: 20,
    // paddingRight: 20,
    paddingHorizontal: 20,
  },
  Horizon: {
    flex: 2,
    // flexDirection: 'row',
  },
  box: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  colorBox1: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#C9C9FF',
    // marginRight: 10,
  },
  colorBox2: {
    backgroundColor: '#3D85C6',
  },
  colorBox3: {
    backgroundColor: '#96CC96',
  },
  colorBox4: {
    backgroundColor: '#F4B940',
  },
});
