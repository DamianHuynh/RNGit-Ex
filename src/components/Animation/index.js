import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const Animation = () => {
  const animated = useRef(new Animated.ValueXY({x: 100, y: 0})).current;
  const onPress = () => {
    // for (let i = 0; i < 100; i++) {
    //   setTimeout(() => animateTranslate.setValue(i), i * 25);
    // }
    Animated.sequence([
      Animated.timing(animated.y, {
        toValue: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animated.x, {
        toValue: 200,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(animated.y, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(animated.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{translateX: animated.x}, {translateY: animated.y}],
          },
        ]}
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Change Position</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
  },
  button: {
    margin: 10,
    height: 50,
    width: 80,
    backgroundColor: '#bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
