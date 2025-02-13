import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

interface ButtonProps {
  title: string;
  onPress: () => void;
  onForgotPassword?: () => void;
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
<View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{title}</Text>
        <Icon name="arrow-right" size={16} color="#fff" /> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#fcc858', 
    padding: 20,
    borderRadius: 40,
    width: 140,
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
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
