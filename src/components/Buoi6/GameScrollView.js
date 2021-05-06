import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import gameData from '../../Data/gameData';

export default class GameScrollView extends Component {
  renderGameItem = () => {
    return gameData.map(gameItem => (
      <View
        key={gameItem.id}
        style={[
          styles.gameContainer,
          {backgroundColor: gameItem.backgroundColor},
        ]}>
        <Image source={gameItem.icon} style={styles.iconGame} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleGame}>{gameItem.title}</Text>
          <Text style={styles.subTitle}>{gameItem.subTitle}</Text>
        </View>
      </View>
    ));
  };
  renderGameItem2 = () => {
    return gameData.map(gameItem => (
      <View
        key={gameItem.id + 10}
        style={[
          styles.gameContainer,
          {backgroundColor: gameItem.backgroundColor},
        ]}>
        <Image source={gameItem.icon} style={styles.iconGame} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleGame}>{gameItem.title}</Text>
          <Text style={styles.subTitle}>{gameItem.subTitle}</Text>
        </View>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <ScrollView>
          {this.renderGameItem()}
          {this.renderGameItem2()}
        </ScrollView>

        {/* {gameData.map(gameItem => (
          <View
            key={gameItem.id}
            style={[
              styles.gameContainer,
              {backgroundColor: gameItem.backgroundColor},
            ]}>
            <Image source={gameItem.icon} style={styles.iconGame} />
            <View style={styles.titleContainer}>
              <Text style={styles.titleGame}>{gameItem.title}</Text>
              <Text style={styles.subTitle}>{gameItem.subTitle}</Text>
            </View>
          </View>
        ))} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#525659',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    borderColor: '#fff',
    width: '90%',
    height: 150,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconGame: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  titleContainer: {
    width: '70%',
  },
  titleGame: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  subTitle: {
    color: '#fff',
    opacity: 0.7,
  },
});
