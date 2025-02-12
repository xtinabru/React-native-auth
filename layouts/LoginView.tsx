// In login view you should implement:
// · Text fields and labels for username and password.
// · A clearly visible button for login.
// · A clickable text for signup if user has no user account.
// · A clickable text for password retrieval if user has forgotten password. Print to console when click happens here.


import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AuthButton from "./AuthButton";

interface LoginProps {
  title: string;
  subtitle: string;
}

const LoginView = ({ title, subtitle }: LoginProps) => {

  const handleLoginPress = () => {
    console.log('Login button pressed');
  };

  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      
      <Text>Email</Text>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      
      <Text>Password</Text>
      <TextInput placeholder="Password" secureTextEntry style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      
     <AuthButton title="Login" onPress={handleLoginPress}></AuthButton>
      
    
      
      <Text>Don't have an account?</Text>
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
