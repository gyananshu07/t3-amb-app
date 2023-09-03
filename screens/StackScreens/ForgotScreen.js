import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../GlobalStyles";
import image from "../../assets/Screen1.png";

import { Button, Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import TextInputIcon from "../../utils/TextInputIcon";
import FormLabel from "../../utils/FormLabel";

const ForgotScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="dark" />
      <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.splashImage}
        >
          <Text
            variant="headlineSmall"
            style={{
              alignSelf: "flex-start",
              paddingHorizontal: 20,
              paddingBottom: 15,
              fontFamily: "Poppins-Bold",
              color: "#a52a2a",
              width: "100%",
            }}
          >
            FORGOT PASSWORD
          </Text>

          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <FormLabel label="Registered Mobile Number*" />
              <TextInputIcon
                placeholder="Enter Registered Mobile Number"
                inputIcon={<AntDesign name="mobile1" size={24} color="black" />}
              />
            </View>

            <Button mode="outlined" style={styles.outlinedButton}>
              <Text style={styles.outlineButtonText}>NEXT</Text>
            </Button>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ForgotScreen;
