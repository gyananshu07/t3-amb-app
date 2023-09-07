import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import styles from "../../GlobalStyles";
import { Surface, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BeneficiaryCard = ({ text, imageUrl, screenName }) => {
  const navigation = useNavigation();

  return (
    <Surface style={componentStyle.container}>
      <Pressable
        onPress={() => navigation.navigate(screenName)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Image
          resizeMode="contain"
          source={{
            uri: imageUrl,
          }}
          style={componentStyle.image}
        />
        <Text
          variant="titleMedium"
          style={[
            { flexWrap: "wrap", color: "#333", textAlign: "center" },
            styles.fontMedium,
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </Surface>
  );
};

export default BeneficiaryCard;

const componentStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    width: "50%",
    height: 200,
  },
  image: {
    width: 120,
    height: 120,
  },
});
