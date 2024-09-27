import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Win'>;

const WinScreen: React.FC<Props> = ({ navigation, route }) => {
  const { points } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations! You have {points} points!</Text>
      <Button title="Continue" onPress={() => navigation.push('Win', { points: points + 100 })} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default WinScreen;
