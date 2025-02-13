// In signup view you should implement
// · Arrow icon for going back (navigation does not have to work yet)
// · Four input fields with labels
// o Full name
// o Email
// o Password
// o Password confirmation
// · Button to complete signup
// · Clickable text link to go back to sign in

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInpput";

const SignupView = () => {
  const handleSignUpPress = () => {
    console.log("Sign Up button pressed");
  };

  const handleLoginPress = () => {
    console.log("Login link pressed");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/orange.png')}
        style={styles.topRightImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>

        <AuthInput placeholder="Full Name" />
        <AuthInput placeholder="Email" />
        <AuthInput placeholder="Password" secureTextEntry />
        <AuthInput placeholder="Confirm Password" secureTextEntry />

        <AuthButton title="Sign Up" onPress={handleSignUpPress} />

        <View style={styles.footer}>
          <Text style={styles.text}>Already have an account? </Text>
          <Text style={styles.link} onPress={handleLoginPress}>Log In</Text>
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
    left: 230,            
    width: "100%",         
    height: "40%",       
    resizeMode: "stretch",         
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

  footer: {
    
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
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


export default SignupView;
