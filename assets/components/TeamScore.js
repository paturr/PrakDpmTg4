import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={onIncrease} />
        <Button title="-" onPress={onDecrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 36,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default TeamScore;