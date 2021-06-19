import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const ChildComponent = () => {
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  return (
    <View>
      <Text>ChildComponent</Text>
    </View>
  );
};

export default ChildComponent;
