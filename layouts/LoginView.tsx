// In login view you should implement:
// · Text fields and labels for username and password.
// · A clearly visible button for login.
// · A clickable text for signup if user has no user account.
// · A clickable text for password retrieval if user has forgotten password. Print to console when click happens here.

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthButton from "./AuthButton";  
import AuthInput from "./AuthInpput";  

interface LoginProps {
  title: string;
  subtitle: string;
}

const LoginView = ({ title, subtitle }: LoginProps) => {

  const handleLoginPress = () => {
    console.log('Login button pressed');
  };

  const handleSignUpPress = () => {
    console.log('Sign Up link pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      
      <AuthInput placeholder="Email" />
      <AuthInput placeholder="Password" secureTextEntry />
      
      <AuthButton title="Login" onPress={handleLoginPress} />
      
      <View style={styles.footer}>
        <Text style={styles.text}>Don't have an account? </Text>
        <Text style={styles.link} onPress={handleSignUpPress}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    alignContent: 'center',
    padding: 40,
    marginBottom: 0
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 0,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#a5a5a5',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  button: {
    justifyContent: 'flex-end',
    backgroundColor: '#fea037',  
    borderRadius: 40,
    padding: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
  },
  text: {
    fontSize: 14,
    color: '#a5a5a5',
    fontWeight: '700',
  },
  link: {
    fontSize: 14,
    color: '#fea037',
    fontWeight: '900',
  },
});

export default LoginView;
