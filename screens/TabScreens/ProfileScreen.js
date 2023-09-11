import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.container, { paddingVertical: 10 }]}
        style={{ width: "100%" }}
      >
        <View style={{ paddingHorizontal: 10, gap: 20 }}>
          <Surface elevation={1} style={styles.profileCard}>
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
          </Surface>

          <Surface elevation={1} style={styles.profileCard}>
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
          </Surface>

          <Surface elevation={1} style={styles.profileCard}>
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
          </Surface>

          <Surface elevation={1} style={styles.profileCard}>
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
          </Surface>

          <Surface elevation={1} style={styles.profileCard}>
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
          </Surface>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
