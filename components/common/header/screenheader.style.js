import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  profileBtnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray,
  },
  dropdownWrapper: {
    padding: 20,
  },
  dropdownText: {
    fontSize: SIZES.large,
    color: "black",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small / 1.25,
  },
  closeButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: "center",
  },
});

export default styles;
