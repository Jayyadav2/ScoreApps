import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [points, setPoints] = useState(0); // Initialize points to 0

  const handleWin = () => {
    const newPoints = points + 100; // Calculate new points
    setPoints(newPoints);

    if (newPoints > 0) {
      navigation.navigate('Win', { points: newPoints }); // Navigate to Win screen
    } else {
      navigation.navigate('Lose', { points: newPoints }); // Navigate to Lose screen
    }
  };

  const handleLose = () => {
    const newPoints = points - 50; // Calculate new points
    setPoints(newPoints);

    if (newPoints < 0) {
      navigation.navigate('Lose', { points: newPoints }); // Navigate to Lose screen
    } else {
      navigation.navigate('Win', { points: newPoints }); // Navigate to Win screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Points: {points}</Text>
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
