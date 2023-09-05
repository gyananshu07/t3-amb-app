import { View, Image } from "react-native";
import React from "react";
import styles from "../../GlobalStyles";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ContactUsScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%", gap: 10 }}>
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "#ae3f3f",
        }}
        source={require("../../assets/ContactUs.png")}
      />

      <View
        style={[
          styles.row,
          {
            gap: 10,
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        <Ionicons name="location-sharp" size={30} color="#a52a2a" />
        <Text
          style={[
            styles.fontMedium,
            { width: "100%", flex: 1, flexWrap: "wrap" },
          ]}
        >
          AMB Unit-Institute of Economic Growth, University Enclave, University
          of Delhi (North Campus), Delhi-110 007, India
        </Text>
      </View>

      <View
        style={[
          styles.row,
          {
            gap: 10,
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        <Ionicons name="phone-portrait-outline" size={24} color="#a52a2a" />
        <Text
          style={[
            styles.fontMedium,
            { width: "100%", flex: 1, flexWrap: "wrap" },
          ]}
        >
          +91 11-27666364/6367, 27667101, 2766710
        </Text>
      </View>

      <View
        style={[
          styles.row,
          {
            gap: 10,
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            borderRadius: 5,
            borderRightColor: "#a52a2a",
          },
        ]}
      >
        <Ionicons name="ios-mail" size={24} color="#a52a2a" />
        <Text
          style={[
            styles.fontMedium,
            { width: "100%", flex: 1, flexWrap: "wrap" },
          ]}
        >
          support@t3amb.info
        </Text>
      </View>
    </View>
  );
};

export default ContactUsScreen;
