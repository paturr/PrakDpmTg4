import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.resetButton}>
      <Button title="Reset Pertandingan" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    marginTop: 30,
  },
});

export default ResetButton;