import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackgroundImage, Bot, Paper, Player, Rock, Scissor} from '../../assets';
import PlayerItem from './PlayerItem';

export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem imageGame={Paper} imagePlayer={Player} />
              <PlayerItem imageGame={Rock} imagePlayer={Bot} />
            </View>
            <View style={styles.selectContent}>
              <View style={styles.borderItem}>
                <Image style={styles.imageItem} source={Scissor} />
              </View>
              <View style={styles.borderItem}>
                <Image style={styles.imageItem} source={Rock} />
              </View>
              <View style={styles.borderItem}>
                <Image style={styles.imageItem} source={Paper} />
              </View>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTxt}>Score: 0</Text>
              <Text style={styles.infoTxt}>Times: 9</Text>
            </View>
            <View style={styles.buttonContent}>
              <TouchableOpacity style={styles.buttonPlay}>
                <Text style={styles.buttonTxt}>Play</Text>
              </TouchableOpacity>
              <LinearGradient
                style={styles.buttonReset}
                colors={['#daaa0c', '#ffce35']}>
                <TouchableOpacity>
                  <Text style={styles.buttonTxt}>Reset</Text>
                </TouchableOpacity>
              </LinearGradient>
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
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonPlay: {
    height: 50,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9aff',
  },
  buttonReset: {
    height: 50,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fecd34',
  },
  buttonTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
