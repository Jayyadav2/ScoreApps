import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WinScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { points } = route.params; // Get points from route

  const handleWin = () => {
    const newPoints = points + 100; // Calculate new points
    navigation.navigate('Win', { points: newPoints }); // Stay on Win screen
  };

  const handleLose = () => {
    const newPoints = points - 50; // Calculate new points
    if (newPoints < 0) {
      navigation.navigate('Lose', { points: newPoints }); // Navigate to Lose screen
    } else {
      navigation.navigate('Win', { points: newPoints }); // Stay on Win screen
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>You earned 100 points!</Text>
      <Text style={styles.text}>Total Points: {points}</Text>
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
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WinScreen;
