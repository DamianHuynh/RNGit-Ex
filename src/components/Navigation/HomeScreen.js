import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  state = {
    number: 0,
    name: 'Hello World',
    user: {
      name: 'RN02',
      address: 'Cao Thang',
    },
  };
  render() {
    console.log(this.props.navigation);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DetailDrawer', {
              number: this.state.number,
              name: this.state.name,
              user: this.state.user,
            })
          }
          style={{
            marginTop: 20,
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#bff',
          }}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
