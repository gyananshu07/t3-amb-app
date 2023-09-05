import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TodaysNotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins-Medium" }}>
        No Notifications Found
      </Text>
    </View>
  );
};

export default TodaysNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
