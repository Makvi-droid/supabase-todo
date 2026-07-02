import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { supabase } from "@/app/supabase";
import { Link } from "expo-router";
import { useState } from "react";
export default function LogInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async () => {
    const { data, error } = await supabase.from("users").insert([
      {
        username: username,
        password: password,
      },
    ]);

    if (error) {
      console.log("Supabase Error:", error);
      console.log("Message:", error.message);
      console.log("Code:", error.code);
      console.log("Details:", error.details);
      console.log("Hint:", error.hint);
      Alert.alert("Error");
    } else {
      Alert.alert("Succes");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>My To-do List App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity style={styles.loginBtn} onPress={addUser}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <Text>Or Sign in with</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Google</Text>
        </TouchableOpacity>
        <Text>
          Don't have an Account?
          <Link href="/(screens)/signUpScreen" style={styles.signUpLink}>
            Sign Up
          </Link>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "25%",
  },

  text: {
    fontSize: 20,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
  },

  loginBtn: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  signUpLink: {
    textDecorationLine: "underline",
  },
});
