import React from "react";
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface AuthInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onForgotPassword?: () => void;
}

const AuthInput = ({ placeholder, secureTextEntry, onForgotPassword }: AuthInputProps) => {

  const getIconName = () => {
    if (placeholder.toLowerCase() === "email") return "mail"; // email icon
    if (placeholder.toLowerCase() === "password") return "lock";   // password icon
    return null;
  };

  

  return (
    <View style={styles.inputContainer}>
    {getIconName() && (
        <Icon name={getIconName()!} size={20} color="#999" style={styles.icon} />
      )}
     
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
  icon: {
    position: "absolute",
    left: 15,  
    top: "50%",
    transform: [{ translateY: -10 }], 
    color: 'black',
    zIndex: 1, 
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 40, 
    paddingRight: 60, 
    fontSize: 12,
    backgroundColor: '#fff',
  },
  forgotContainer: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -5 }], // put in the mid
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
