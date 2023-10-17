import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../app/secrets/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import styles from "./signup.style";
import Login from "../login/Login";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState("");
  const router = useRouter();
  const auth = FIREBASE_AUTH;
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      router.push("/home");
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
      />
      <TextInput
        value={password}
        autoCapitalize="none"
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={(text) => setPassword(text)}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <>
          <TouchableOpacity style={styles.loginButton} onPress={signUp}>
            <Text style={styles.loginButtonText}>SignUp</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Signup;
