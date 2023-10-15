import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { icons } from "../../../constants";
import styles from "./footer.style";

function LikeBtn({ liked, onHandleLikeClick }) {
  return (
    <TouchableOpacity style={styles.likeBtn} onPress={onHandleLikeClick}>
      {liked ? (
        <Image
          source={icons.heartFilled}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      ) : (
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnOut}
        />
      )}
    </TouchableOpacity>
  );
}
const Footer = ({ url, liked, setLiked }) => {
  return (
    <View style={styles.container}>
      <LikeBtn
        liked={liked}
        onHandleLikeClick={() =>
          liked === true ? setLiked(false) : setLiked(true)
        }
      />
      <TouchableOpacity style={styles.applyBtn} onPress={()=>{Linking.openURL(url)}}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
