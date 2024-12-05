import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import TeamScore from './src/components/TeamScore';
import ResetButton from './src/components/ResetButton';

export default function App() {
  // State untuk skor
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  // Fungsi untuk menambah skor
  const increaseScore = (team) => {
    if (team === 'A') {
      if (scoreTeamA + 1 === 10) {
        Alert.alert('Hasil Pertandingan', 'Tim A menang!');
      }
      setScoreTeamA(scoreTeamA + 1);
    } else if (team === 'B') {
      if (scoreTeamB + 1 === 10) {
        Alert.alert('Hasil Pertandingan', 'Tim B menang!');
      }
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  // Fungsi untuk mengurangi skor
  const decreaseScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplikasi Pengaturan Skor</Text>

      {/* Komponen Tim A */}
      <TeamScore
        teamName="Tim A"
        score={scoreTeamA}
        onIncrease={() => increaseScore('A')}
        onDecrease={() => decreaseScore('A')}
      />

      {/* Komponen Tim B */}
      <TeamScore
        teamName="Tim B"
        score={scoreTeamB}
        onIncrease={() => increaseScore('B')}
        onDecrease={() => decreaseScore('B')}
      />

      {/* Tombol Reset */}
      <ResetButton onReset={resetScores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});