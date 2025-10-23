import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
       */}
      <Text style={tw`text-blue-500 text-lg font-bold`}>Hello, Tailwind CSS in React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
