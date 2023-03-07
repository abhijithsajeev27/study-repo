import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.setFont]}>Hello there!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    backgroundColor: '#5DA7DB',
    alignItems: 'center',
    justifyContent: 'center',
    Color: 'yellow',
  },
  setFont: {
    fontSize: 38,
    fontColor: 'green',
    fontWeight: 'bold',
  }
});