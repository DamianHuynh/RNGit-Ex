import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {BackgroundImage, Bot, Player} from '../../../assets';
import PlayerItem from './PlayerItem';
import ResultContent from './ResultContent';
import SelectContent from './SelectContent';

class BaiTapRedux extends Component {
  state = {
    disable: false,
    isSelect: 'paper',
    score: 0,
    times: 9,
  };

  render() {
    const {playerSelect, botSelect} = this.props;
    // console.log(this.props.playerSelect);
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem imageGame={playerSelect.image} imagePlayer={Player} />
              <PlayerItem imageGame={botSelect.image} imagePlayer={Bot} />
            </View>
            <View style={styles.selectContent}>
              <SelectContent />
            </View>
            <View style={styles.infoContent}>
              <ResultContent />
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContent: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
  },
  playerContent: {
    flex: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
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
    borderWidth: 3,
    borderColor: 'yellow',
  },
  infoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00fecd',
  },
});

const mapStateToProp = state => {
  return {
    playerSelect: state.gameReducer.playerSelect,
    botSelect: state.gameReducer.botSelect,
  };
};

export default connect(mapStateToProp)(BaiTapRedux);
