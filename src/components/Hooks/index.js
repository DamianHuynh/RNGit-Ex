import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ChildComponent from './ChildComponent';

const LearnHooks = () => {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState();

  const onPress = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    setUserName(`RN 0${number}`);
  }, [number]);

  console.log('render');

  return (
    <View style={styles.container}>
      <Text>LearnHooks</Text>
      <Text>Number: {number}</Text>
      <Text>User Name: {userName}</Text>
      {number > 2 ? null : <ChildComponent />}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Count up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setUserName('RN 02')}>
        <Text>Set Name</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LearnHooks;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#bff',
    borderRadius: 8,
  },
});
