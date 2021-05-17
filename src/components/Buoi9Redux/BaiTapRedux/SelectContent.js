import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

//array = [{id:'' ,image: path, status: true},
//         {id:'' ,image: path, status: false},
//         {id:'' , image: path, status: false}]

class SelectContent extends Component {
  render() {
    return this.props.arrayGame.map(item => (
      <TouchableOpacity
        disabled={this.props.disable}
        onPress={() => {
          this.props.onSelectItem(item);
        }}
        key={item.id}
        style={[styles.borderItem, item.status && styles.selectedItem]}>
        <Image style={styles.imageItem} source={item.image} />
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  imageItem: {
    width: 50,
    height: 50,
  },
  borderItem: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
  },
  selectedItem: {
    borderWidth: 3,
    borderColor: 'yellow',
  },
});

const mapStateToProp = state => ({
  arrayGame: state.gameReducer.arrayGame,
});

export default connect(mapStateToProp)(SelectContent);
