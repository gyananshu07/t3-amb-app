import React, { useState } from "react";
import { View, Pressable, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { Asset } from "expo-asset";
import { ProgressBar, MD3Colors, Surface } from "react-native-paper";

const CustomVideoCard = ({ imageSource }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  const playVideo = async () => {
    setIsLoadingVideo(true);
    if (!isVideoPlaying) {
      const videoAsset = Asset.fromModule(
        require("../../assets/videos/AMB-E-Training-Module-Launch.mp4")
      );
      await videoAsset.downloadAsync();
      setIsLoadingVideo(false);
      setIsVideoPlaying(true);
    }
  };

  return (
    <Surface
      style={{
        backgroundColor: "white",
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: 15,
      }}
    >
      {isLoadingVideo && (
        <ProgressBar indeterminate={true} color={MD3Colors.error50} />
      )}
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
    </Surface>
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
