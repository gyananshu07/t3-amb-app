import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <Image
          resizeMode="contain"
          style={{ width: 180, height: 180 }}
          source={require("../../assets/icons/emblem.png")}
        />
        <Text
          variant="titleMedium"
          style={{
            paddingTop: 10,
            fontFamily: "Poppins-SemiBold",
            letterSpacing: 0.5,
            color: "#a52a2a",
          }}
        >
          PROFILE INFORMATION
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ width: "100%" }}
      >
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <View style={styles.profileCard}>
            <Text
              variant="bodyMedium"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              User Type
            </Text>
            <Text
              variant="bodyLarge"
              style={{ color: "#a52a2a", fontFamily: "Poppins-Regular" }}
            >
              Developer
            </Text>
          </View>

          <View style={styles.profileCard}>
            <Text
              variant="bodyMedium"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Name
            </Text>
            <Text
              variant="bodyLarge"
              style={{ color: "#a52a2a", fontFamily: "Poppins-Regular" }}
            >
              Developer Name
            </Text>
          </View>

          <View style={styles.profileCard}>
            <Text
              variant="bodyMedium"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              DOB
            </Text>
            <Text
              variant="bodyLarge"
              style={{ color: "#a52a2a", fontFamily: "Poppins-Regular" }}
            >
              01-01-2023
            </Text>
          </View>

          <View style={styles.profileCard}>
            <Text
              variant="bodyMedium"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Mobile Number
            </Text>
            <Text
              variant="bodyLarge"
              style={{ color: "#a52a2a", fontFamily: "Poppins-Regular" }}
            >
              +91 99999 99999
            </Text>
          </View>

          <View style={styles.profileCard}>
            <Text
              variant="bodyMedium"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Facility Address
            </Text>
            <Text
              variant="bodyLarge"
              style={{ color: "#a52a2a", fontFamily: "Poppins-Regular" }}
            >
              A-1, Sample Colony, Sample City, Sample State - 00000
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "max-content",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightColor: "#a52a2a",
    borderRightWidth: 5,
    padding: 7,
    gap: 5,
  },
});
