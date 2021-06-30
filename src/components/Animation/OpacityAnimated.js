import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';

// Interpolate
// | x    | 0 | 5  | 10 |
// | f(x) | 0 | 10 | 20 |

// | x    | 0 | 2.5 | 5  | 7.5 | 10 |
// | f(x) | 0 |  5  | 10 | 15  | 20 |

// opacity (x)        | 0 | 1               |
// translateX (f(x))  | 0 | width / 2 - 50  |

// x     | 0    | 1     |  0    |
// color |white | black | white |
export default function OpacityAnimated() {
  const {width} = useWindowDimensions();

  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = opacity.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, width - 100, width / 2 - 50],
  });
  const rotate = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColor = opacity.interpolate({
    inputRange: [0.5, 1],
    outputRange: ['yellow', 'orange'],
  });

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {backgroundColor, opacity, transform: [{translateX}, {rotate}]},
        ]}
      />
      <LottieView source={require('../../assets/loading.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
});
