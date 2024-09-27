import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const [points, setPoints] = useState(route.params.points);

  const handleWin = () => {
    navigation.push('Win', { points: points + 100 });
  };

  const handleLose = () => {
    setPoints(points - 50);
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
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
