



import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert
} from "react-native";


export default function LoginScreen({ navigation, setIsLoggedIn}: any) {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onLogin = () => {
    // if (!email || !password) return Alert.alert("Error", "Please fill all fields");
    if (!/\S+@\S+\.\S+/.test(email))
       {
        return Alert.alert("Error", "Invalid email");

       }
    // if (password.length < 6) return Alert.alert("Error", "Password must be 6+ chars");

    // Alert.alert("Logged in", `Welcome back, ${email}`);

     Alert.alert("Logged in", `Welcome back, ${email}`, [
      {
        text: "OK",
        onPress: () => {
          setIsLoggedIn(true);  // <-- ADD THIS LINE to update login state
        }
      }
    ]);
    
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        
        <View style={styles.top}>
         
         
          <Text style={styles.title}>Hello Again!</Text>
          <Text style={styles.subtitle}>Welcome back you’ve been missed...!!</Text>
        </View>

        
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter mobile number / email address"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

         
          <TouchableOpacity style={styles.primaryButton} onPress={onLogin}>
            <Text style={styles.primaryText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or</Text>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => navigation.navigate("Signup")}
          >
            {/* <Text style={styles.linkText}> Sign Up</Text> */}
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
// Don't have an account?
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { 
    flex: 1, 
    padding: 24,
    
     gap:80,
     justifyContent:"center",
      paddingBottom:40},
  top: { 
    alignItems: "center", marginTop: 5,
   },
  // logo: { 
  //   width: 50, height: 50, marginBottom: 12, tintColor: "#1fa39a" 
  // },
  title: { 
    fontSize: 22, fontWeight: "700"
    , marginBottom: 6 ,marginTop:10
  },
  subtitle: { 
    color: "#666", marginBottom: 2,paddingTop:88 },
  form: {
    alignItems:"center",marginBottom:49 ,

  },
  inputBox: {
    height:55,
    width: "100%",
    backgroundColor: "#f2f3f4",
    borderRadius: 22,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  input: { height: 55 },
  primaryButton: {
    backgroundColor: "#18988B",
    width: "85%",
    paddingVertical: 19,
    borderRadius: 28,
    alignItems: "center",
    marginVertical: 12,
  },
  primaryText: { color: "#fff", fontWeight: "700" 

  },
  orText: { marginTop: 16, color: "#777" 

  },
  linkButton: { marginTop: 16 },
  // linkText: { color: "#18988B",fontWeight:"600"},
  linkText: { color: "#169983", fontWeight: "600" },

});
