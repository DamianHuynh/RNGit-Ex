import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class DetailScreen extends Component {
  render() {
    console.log('\n', JSON.stringify(this.props, null, 2));
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail Screen</Text>
        {/* <Text>{this.props.route.params.number}</Text> */}
        {this.props.route.params && <Text>{this.props.route.params.name}</Text>}
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            marginTop: 20,
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#bff',
          }}>
          <Text>Go back</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() =>
            this.props.navigation.push('DetailScreen', {
              number: this.props.route.params.number + 1,
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
          <Text>Move to Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.pop(1)}
          style={{
            marginTop: 20,
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#bff',
          }}>
          <Text>Move to Top</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
