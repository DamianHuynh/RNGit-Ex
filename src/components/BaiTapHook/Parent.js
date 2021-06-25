import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BaiTapHook from './index';
import useClock from './useClock';

const Parent = () => {
  const [showClock, setShowClock] = useState(true);
  const time = useClock();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowClock(!showClock)}>
        <Text>Show/ Hide Clock</Text>
      </TouchableOpacity>
      {showClock && <BaiTapHook />}
      <Text>Clock Parent: {time}</Text>
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
