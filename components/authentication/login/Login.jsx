import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { WEB_CLIENT_ID } from "@env";
import React, { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../../../app/secrets/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useNavigation, useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import styles from "./login.style";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState("");
  const router = useRouter();
  const auth = FIREBASE_AUTH;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);
  const googleSignIn = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      alert("Google SignIn successfull");
      router.push("/home");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    } finally {
      setLoading(false);
    }
  };
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      router.push("/home");
    } catch (error) {
      console.log(error);
      alert(error.message);
      if (error.code === "auth/user-not-found") {
        alert(`${error.message}Please Sign Up`);
        router.push("/signup");
      }
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
        style={styles.inputBox}
      />
      <TextInput
        value={password}
        autoCapitalize="none"
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={(text) => setPassword(text)}
        style={styles.inputBox}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <>
          <TouchableOpacity style={styles.loginButton} onPress={signIn}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </>
      )}
      <Text> Or</Text>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
      />

      <Text>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
