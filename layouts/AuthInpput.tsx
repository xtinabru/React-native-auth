import React, { useState } from "react";
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface AuthInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onForgotPassword?: () => void;
}

const AuthInput = ({ placeholder, secureTextEntry, onForgotPassword }: AuthInputProps) => {
  return (
    <View style={styles.inputContainer}>
     
      <TextInput
        placeholder={placeholder.toUpperCase()}
        secureTextEntry={secureTextEntry}
        style={[styles.input, { textTransform: 'uppercase', fontWeight: 'bold' }]}
      />
      
      {/* Condition if the placeholder == "Password" */}
      {placeholder === "Password" && (
        <TouchableOpacity onPress={onForgotPassword} style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative', // to fix the link inside the input
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10, 
    paddingRight: 60, 
    fontSize: 16,
    backgroundColor: '#fff',
  },
  forgotContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }], // put in the mid
  },
  forgotText: {
    fontSize: 12,
    color: '#fea037',  
    fontWeight: '900',
    textTransform: 'uppercase',
    flexWrap: 'wrap'
  },
});

export default AuthInput;
