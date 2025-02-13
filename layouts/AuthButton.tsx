import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const AuthButton = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
  style={styles.button}
  onPress={() => {
    console.log('Button pressed');
    onPress();
  }}
>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#fcc858', 
    padding: 20,
    borderRadius: 40,
    width: 120,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AuthButton;
