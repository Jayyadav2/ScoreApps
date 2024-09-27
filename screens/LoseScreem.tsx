import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoseScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { points } = route.params; // Get points from route

  const handleWin = () => {
    const newPoints = points + 100; // Calculate new points
    navigation.navigate('Win', { points: newPoints }); // Navigate to Win screen
  };

  const handleLose = () => {
    const newPoints = points - 50; // Calculate new points
    navigation.navigate('Lose', { points: newPoints }); // Stay on Lose screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your final points: {points}</Text>
      <Button title="Win" onPress={handleWin} />
      <Button title="Lose" onPress={handleLose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red', // Color for LoseScreen
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoseScreen;
