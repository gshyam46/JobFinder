import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";

import styles from "./screenheader.style";

const HeaderProfileBtn = ({ email, handlePress }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.profileBtnContainer}
        onPress={toggleDropdown}
      >
        <Text style={styles.profileBtnText}>{email[0]}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDropdownVisible}
      >
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            onPress={handlePress}
            style={styles.dropdownWrapper}
          >
            <Text style={styles.dropdownText}>Sign Out</Text>
          </TouchableOpacity>
          <TouchableHighlight
            onPress={toggleDropdown}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderProfileBtn;
