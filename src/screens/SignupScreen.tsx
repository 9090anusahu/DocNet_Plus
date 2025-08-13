


import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
 import Icon from "react-native-vector-icons/MaterialIcons";
export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const handleSignup = () => {
    if (!name || !email || !mobile || !city) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Invalid email format");
      return;
    }
    if (mobile.length < 10) {
      Alert.alert("Error", "Mobile number must be at least 10 digits");
      return;
    }
    Alert.alert("Success", `Account created for ${name}`);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome !!</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed...!!</Text>

    
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

     
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      {/* City */}
      <View style={styles.inputContainer}>
        <Icon name="location-city" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#999"
          value={city}
          onChangeText={setCity}
        />
      </View>

      
      <Text style={styles.terms}>
        By registering you agree to our <Text style={styles.link}>Terms and Conditions</Text>
      </Text>

      
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    
      <TouchableOpacity onPress={() =>navigation.navigate("Login")}>
        <Text style={styles.signinText}>
          Already have an account? <Text style={styles.link}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
      padding: 20, 
     backgroundColor: "#fff",
      justifyContent: "center" },
  title: {
     fontSize: 28,
     fontWeight: "bold", 
     textAlign: "center",
      color: "#000"
      ,
      
     },

  subtitle: { fontSize: 14, 
    color: "#888",
     textAlign: "center", 
     marginBottom: 30,
    marginVertical:20 },


  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 60,
    marginTop:2
  },
  icon: { marginRight: 8 

  },
  input: { flex: 1, 
    fontSize: 16, color: "#000"

   },
  terms: {
     fontSize: 12, color: "#555", textAlign: "center", marginVertical: 10
     },
  link: {
     color: "#18988B",fontWeight:"bold"
    },
  button: {
    backgroundColor: "#18988B",
   
    borderRadius: 20,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    gap:50,
  },
  buttonText: { color: "#fff",
     fontSize: 18, 
    fontWeight: "bold"
  
},
  signinText: { textAlign: "center", fontSize: 14, color: "#555",gap:50 },
});
