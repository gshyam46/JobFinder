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
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 70,
    width: 200,
    fontFamily: FONT.regular,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 100,
    justifyContent: "center",
    marginVertical: SIZES.medium,
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  loginButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
