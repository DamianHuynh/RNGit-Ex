import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {BackgroundImage, Bot, Paper, Player, Rock, Scissor} from '../../assets';
import PlayerItem from './PlayerItem';
import ResultContent from './ResultContent';
import SelectContent from './SelectContent';

export default class BaiTapOanTuXi extends Component {
  state = {
    disable: false,
    playerSelect: {id: 'paper', image: Paper, status: true},
    botSelect: {id: 'rock', image: Rock, status: false},
    isSelect: 'paper',
    arrayGame: [
      {id: 'scissor', image: Scissor, status: false},
      {id: 'rock', image: Rock, status: false},
      {id: 'paper', image: Paper, status: true},
    ],
    score: 0,
    times: 9,
  };

  onSelectItem = selectItem => {
    //Cách 1: Tạo state isSelect
    // this.setState({playImage: selectItem.image, isSelect: selectItem.id});

    //Cách 2: Khi xử lý status với mảng arrayGame
    const arrayGame = this.state.arrayGame;
    const index = arrayGame.findIndex(item => item.id === selectItem.id);
    if (!arrayGame[index].status) {
      const previousSelectIndex = arrayGame.findIndex(item => item.status);
      arrayGame[index].status = true;
      arrayGame[previousSelectIndex].status = false;
    }
    this.setState({playerSelect: selectItem, arrayGame});
  };

  onPressPlayButton = () => {
    this.setState({disable: true});
    const random = setInterval(() => {
      this.state.botSelect = this.state.arrayGame[
        Math.floor(Math.random() * 3)
      ];
      this.setState({botSelect: this.state.botSelect}, () => {
        // console.log(this.state.botSelect);
      });
    }, 100);

    //Count++ sử dụng biến count để clear interval
    setTimeout(() => {
      clearInterval(random);
      let times, score;
      switch (this.state.playerSelect.id) {
        case 'paper':
          if (this.state.botSelect.id === 'paper') {
            score = this.state.score;
            times = this.state.times - 1;
          } else if (this.state.botSelect.id === 'scissor') {
            if (this.state.score > 0) {
              score = this.state.score - 1;
            }
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'rock':
          if (this.state.botSelect.id === 'rock') {
            score = this.state.score;
            times = this.state.times - 1;
          } else if (this.state.botSelect.id === 'paper') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'scissor':
          if (this.state.botSelect.id === 'scissor') {
            score = this.state.score;
            times = this.state.times - 1;
          } else if (this.state.botSelect.id === 'rock') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
      }
      this.setState({disable: false, times, score}, () => {
        console.log('time: ', this.state.times);
        console.log('score: ', this.state.score);
      });
    }, 1000);
  };

  render() {
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem
                imageGame={this.state.playerSelect.image}
                imagePlayer={Player}
              />
              <PlayerItem
                imageGame={this.state.botSelect.image}
                imagePlayer={Bot}
              />
            </View>
            <View style={styles.selectContent}>
              <SelectContent
                disable={this.state.disable}
                arrayGame={this.state.arrayGame}
                onSelectItem={this.onSelectItem}
                isSelect={this.state.isSelect}
              />
            </View>
            <View style={styles.infoContent}>
              <ResultContent
                disable={this.state.disable}
                times={this.state.times}
                score={this.state.score}
                onPressPlayButton={this.onPressPlayButton}
              />
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
