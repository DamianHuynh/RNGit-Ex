import {connect} from 'react-redux';
import React, {memo, useEffect} from 'react';
import {View, Text} from 'react-native';

const ChildComponent = ({number}) => {
  console.log('ChildComponent render');

  return (
    <View>
      <Text>ChildComponent: {number}</Text>
    </View>
  );
};
export default connect()(memo(ChildComponent));

// sum =  (a ,b) => a + b;
// sum(2,3) => 2 + 3 = 5
// sum(2,3) => 5
// sum(3,2) => 5

// import React, {PureComponent} from 'react';
// import {Text, View} from 'react-native';

// export default class ChildComponent extends PureComponent {
//   render() {
//     console.log('ChildComponent render');

//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     );
//   }
// }
