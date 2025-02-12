// In login view you should implement:
// · Text fields and labels for username and password.
// · A clearly visible button for login.
// · A clickable text for signup if user has no user account.
// · A clickable text for password retrieval if user has forgotten password. Print to console when click happens here.


import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

interface LoginProps {
  title: string;
  subtitle: string;
}

const LoginView = ({ title, subtitle }: LoginProps) => {

  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      
      <Text>Email</Text>
      <TextInput placeholder="Email" />
      
      <Text>Password</Text>
      <TextInput placeholder="Password" secureTextEntry />
      
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      
    
      
      <Text>Don't have an account?</Text>
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
