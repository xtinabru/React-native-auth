import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginView from './layouts/LoginView';



export default function App() {
  return (
    <View style={styles.container}>
    <LoginView title="Login" subtitle="Please sign in to continue."/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
