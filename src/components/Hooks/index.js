import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ChildComponent from './ChildComponent';

const LearnHooks = () => {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState();

  const [state, setState] = useState({userName: 'RN 02', address: 'Cao Thắng'});
  const demo = useMemo((a, b) => {
    return a + b;
  }, []);

  const onPress = () => {
    setNumber(state => {
      console.log(state);
      return state + 1;
    });
  };

  const demoFunc = useCallback((a, b) => {
    return a + b;
  }, []);

  console.log('LearnHooks render');

  return (
    <View style={styles.container}>
      {/* <Text>LearnHooks</Text>
      <Text>Number: {number}</Text> */}
      <Text>User Name: {state.userName}</Text>
      <Text>Address: {state.address}</Text>
      {/* <ChildComponent demo={demo} /> */}
      {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Count up</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          setState(prevState => ({...prevState, userName: 'React Native 02'}))
        }>
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
