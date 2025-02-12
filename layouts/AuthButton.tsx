import { Text, TouchableOpacity, ButtonProps, StyleSheet } from 'react-native'
import React from 'react'

interface LoginProps{
  title: string;
  onPress: () => void;
}


const AuthButton = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fcc858', 
    padding: 10,
    borderRadius: 4,
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

})

export default AuthButton