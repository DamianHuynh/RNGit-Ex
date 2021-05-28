import React, {Component} from 'react';
import {Image, Text, View, ActivityIndicator} from 'react-native';
import axios from 'axios';

export default class BaiTapLifecycle extends Component {
  state = {
    movie: {},
    loading: false,
  };

  componentDidMount() {
    this.setState({loading: true});
    axios({
      method: 'GET',
      url:
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP12',
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.movie);
    return (
      <View style={{marginTop: 50}}>
        <ActivityIndicator animating={this.state.loading} size="large" />
        <Image
          source={{uri: this.state.movie.hinhAnh}}
          style={{height: 200, width: 150, backgroundColor: 'gray'}}
        />
        <Text> {this.state.movie.tenPhim} </Text>
        <Text> {this.state.movie.moTa} </Text>
        <Text>{this.state.movie.ngayKhoiChieu}</Text>
      </View>
    );
  }
}
