import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import styles from "../../GlobalStyles";
import { PaperProvider, Surface, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "./CustomModal";

const BeneficiaryCard = ({ text, imageUrl, screenName }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const hideModal = () => setVisible(false);

  return (
    <>
      <Surface style={componentStyle.container}>
        <Pressable
          onPress={() =>
            screenName === "Pregnant Women"
              ? setVisible(true)
              : navigation.navigate(screenName)
          }
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
      <CustomModal onHide={hideModal} visible={visible} />
    </>
  );
};

export default BeneficiaryCard;

const componentStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
