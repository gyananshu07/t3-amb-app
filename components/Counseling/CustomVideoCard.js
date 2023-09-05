import React, { useState } from "react";
import { View, Pressable, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { Asset } from "expo-asset";

const CustomVideoCard = ({ imageSource }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = async () => {
    if (!isVideoPlaying) {
      const videoAsset = Asset.fromModule(
        require("../../assets/videos/AMB-E-Training-Module-Launch.mp4")
      );
      await videoAsset.downloadAsync();
      setIsVideoPlaying(true);
    }
  };

  return (
    <View style={{ backgroundColor: "white", width: 500, height: 300 }}>
      {isVideoPlaying ? (
        <Video
          useNativeControls
          resizeMode="contain"
          source={require("../../assets/videos/AMB-E-Training-Module-Launch.mp4")}
          shouldPlay
          style={styles.backgroundVideo}
        />
      ) : (
        <Pressable onPress={playVideo}>
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              width: 150,
              height: 150,
            }}
            resizeMode="contain"
            source={require("../../assets/icons/LogoAmb.png")}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default CustomVideoCard;
