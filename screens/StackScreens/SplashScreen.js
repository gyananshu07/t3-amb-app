import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Card, Text } from "react-native-paper";
import React, { useEffect } from "react";
import image from "../../assets/Screen1.png";
import styles from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="dark" />
      <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.splashImage}
        >
          <View style={splashStyle.headerContainer}>
            <View style={styles.iconRow}>
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/NHM-logo.png")}
                style={styles.icon}
              />
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/emblem.png")}
                style={styles.icon}
              />
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/poshan.png")}
                style={styles.icon}
              />
            </View>

            <View style={splashStyle.textRow}>
              <Text variant="titleLarge" style={[styles.boldText]}>
                T3 AMB
              </Text>
              <Text variant="titleLarge" style={styles.boldText}>
                TEST-TREAT-TALK
              </Text>
              <Text
                variant="titleLarge"
                style={[styles.boldText, styles.themeColor]}
              >
                ANEMIA MUKT BHARAT
              </Text>
            </View>

            <Card style={splashStyle.card}>
              <Card.Content>
                <Text
                  variant="titleSmall"
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  An app based monitoring system for Test-Treat-Talk under AMB
                  Program.
                </Text>
              </Card.Content>
            </Card>

            <View style={styles.separator}></View>

            <View style={styles.iconRow}>
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/ncear.png")}
                style={styles.icon}
              />
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/IECLogo.png")}
                style={styles.icon}
              />
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/UNICEFLogo.png")}
                style={styles.icon}
              />
            </View>
          </View>

          <Pressable
            style={[styles.button, splashStyle.next]}
            onPress={handlePress}
          >
            <Text variant="titleMedium" style={[styles.buttonText]}>
              Start
            </Text>
          </Pressable>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;

const splashStyle = StyleSheet.create({
  headerContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  textRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 300,
  },
  next: {
    marginBottom: 20,
  },
});
