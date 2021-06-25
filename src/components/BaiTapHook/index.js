import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useClock from './useClock';

const formatTime = date => {
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const seconds = `${date.getSeconds()}`.padStart(2, '0');
  //19:04:09 !== 19:4:9
  //'05'; '035'.slice(-2)
  return `${hours}:${minutes}:${seconds}`;
};

const BaiTapHook = () => {
  // const [time, setTime] = useState('');

  // useEffect(() => {
  //   const clockInterval = setInterval(() => {
  //     console.log('interval');
  //     const now = new Date();
  //     const newTime = formatTime(now);
  //     setTime(newTime);
  //   }, 1000);

  //   return () => {
  //     console.log('Unmount');
  //     clearInterval(clockInterval);
  //   };
  // }, []);

  const time = useClock();

  return (
    <View style={styles.container}>
      <Text>Bài Tập Hook Clock</Text>
      <Text>Clock: {time}</Text>
    </View>
  );
};

export default BaiTapHook;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
