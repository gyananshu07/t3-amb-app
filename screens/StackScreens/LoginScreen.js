import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import image from "../../assets/Screen1.png";
import styles from "../../GlobalStyles";
import { Button, Text, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [loginValues, setLoginValues] = useState({
    mobile: "",
    password: "",
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const handleForgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
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
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollViewContent}
            style={{ width: "100%" }}
          >
            <Text
              variant="headlineSmall"
              style={{
                alignSelf: "flex-start",
                paddingHorizontal: 20,
                fontFamily: "Poppins-Bold",
                color: "#a52a2a",
                width: "100%",
              }}
            >
              LOGIN
            </Text>
            <Formik
              initialValues={loginValues}
              onSubmit={(values) => navigation.navigate("Drawer")}
            >
              {({ handleChange, handleSubmit, values }) => (
                <View style={styles.formContainer}>
                  <TextInput
                    contentStyle={{ fontFamily: "Poppins-Regular" }}
                    selectionColor="#a52a2a"
                    outlineColor="#a52a2a"
                    activeOutlineColor="#a52a2a"
                    style={styles.input}
                    left={
                      <TextInput.Icon
                        icon={() => (
                          <AntDesign name="mobile1" size={24} color="black" />
                        )}
                      />
                    }
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    mode="outlined"
                    onChangeText={handleChange("mobile")}
                    value={values.mobile}
                  />
                  <TextInput
                    selectionColor="#a52a2a"
                    outlineColor="#a52a2a"
                    activeOutlineColor="#a52a2a"
                    contentStyle={{ fontFamily: "Poppins-Regular" }}
                    style={styles.input}
                    mode="outlined"
                    left={
                      <TextInput.Icon
                        icon={() => (
                          <MaterialIcons name="lock" size={24} color="black" />
                        )}
                      />
                    }
                    secureTextEntry={secureTextEntry}
                    right={
                      <TextInput.Icon
                        onPress={() => {
                          setSecureTextEntry(!secureTextEntry);
                        }}
                        icon={() =>
                          secureTextEntry ? (
                            <MaterialCommunityIcons
                              name="eye"
                              size={24}
                              color="black"
                            />
                          ) : (
                            <MaterialCommunityIcons
                              name="eye-off"
                              size={24}
                              color="black"
                            />
                          )
                        }
                      />
                    }
                    placeholder="Enter Password"
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  <Button
                    mode="outlined"
                    onPress={handleSubmit}
                    style={styles.outlinedButton}
                  >
                    <Text style={styles.outlineButtonText}>LOGIN</Text>
                  </Button>

                  <Pressable onPress={handleForgotPress}>
                    <Text style={[styles.boldText, styles.textCenter]}>
                      Forgot Password?
                    </Text>
                  </Pressable>

                  <Pressable onPress={handleRegisterPress}>
                    <Text style={[styles.boldText, styles.textCenter]}>
                      Don't have an account?{" "}
                      <Text style={[styles.boldText, { color: "#3366BB" }]}>
                        Register
                      </Text>
                    </Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
