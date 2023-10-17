import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useState } from "react";
import { FIREBASE_AUTH } from "./secrets/FirebaseConfig";
import { COLORS, SIZES, icons, images } from "../constants";
import {
  Welcome,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
} from "../components";
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    FIREBASE_AUTH.onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
  });
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <HeadeProfileBtn email={userEmail} handlePress={handleSignOut} />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            userEmail={userEmail}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
