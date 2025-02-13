import React from "react";
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface AuthInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onForgotPassword?: () => void;
  isLogin?: boolean;
}

const AuthInput = ({ placeholder, secureTextEntry, onForgotPassword, isLogin  }: AuthInputProps) => {
  const getIconName = () => {
    if (placeholder.toLowerCase() === "email") return "mail"; 
    if (placeholder.toLowerCase() === "password") return "lock";   
    if (placeholder.toLowerCase() === "full name") return "user";
    if (placeholder.toLowerCase() === "confirm password") return "pocket";
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
      
     
      {isLogin && placeholder.toLowerCase() === "password" && (
        <TouchableOpacity onPress={onForgotPassword} style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
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
    transform: [{ translateY: -5 }],
  },
  forgotText: {
    fontSize: 12,
    color: '#fea037',  
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default AuthInput;
