import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
     
      <Image 
        source={require('../assets/images/orange.png')}
        style={styles.topRightImage}
      />

  
      <View style={styles.content}>
        
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topRightImage: {
    position: "absolute",  
    top: -100,            
    left: 170,            
    width: "100%",         
    height: "40%",       
    resizeMode: "stretch",   
    opacity: 0.3,        
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#a5a5a5",
    marginTop: 10,
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 80,
  },
  text: {
    fontSize: 14,
    color: "#a5a5a5",
    fontWeight: "700",
  },
  link: {
    fontSize: 14,
    color: "#fea037",
    fontWeight: "900",
  },
});

export default LoginView;
