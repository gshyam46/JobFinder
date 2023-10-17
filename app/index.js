import { NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Login from "../components/authentication/login/Login";
import Signup from "../components/authentication/signup/Signup";
import { FIREBASE_APP, FIREBASE_AUTH } from "./secrets/FirebaseConfig";
import { Redirect } from "expo-router";
const Stack = createStackNavigator();
function Index() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscribed = FIREBASE_AUTH.onAuthStateChanged(onAuthStateChanged);
    return subscribed;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    );
  }
  return <Redirect href="/home" />;
}

export default () => {
  return <Index />;
};
