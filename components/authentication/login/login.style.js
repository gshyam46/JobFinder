import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.xLarge,
  },
  inputBox: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 50,
    width: 250,
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginBottom: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  googleSignInButton: {
    backgroundColor: COLORS.white,
    borderColor: "navy",
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginBottom: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  googleSignInButtonText: {
    fontSize: SIZES.medium,
    color: "navy",
    fontFamily: FONT.medium,
  },
  loginButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.gray2,
    fontFamily: FONT.bold,
  },
});

export default styles;
