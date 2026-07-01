import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { useState } from "react";

export default function LogInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showValue = () => {
    Alert.alert(
      `Your username is ${username} and Your password is ${password}`,
    );
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
        <TouchableOpacity style={styles.loginBtn} onPress={showValue}>
          <Text>Log In</Text>
        </TouchableOpacity>
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
});
