import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import styles from "../../GlobalStyles";

const Notification = () => {
  return (
    <View style={notificationStyles.container}>
      <Text variant="titleMedium" style={styles.fontSemiBold}>
        Name: Developer
      </Text>
      <Text variant="bodyMedium" style={styles.fontRegular}>
        Mobile: 99999 99999
      </Text>
      <Text variant="bodyMedium" style={styles.fontRegular}>
        Follow-up Date: 01-01-2023
      </Text>
      <Text variant="bodyMedium" style={styles.fontRegular}>
        Village Name: Sample Village
      </Text>
      <Text variant="bodyMedium" style={styles.fontRegular}>
        Beneficiary Type: Sample Type
      </Text>
    </View>
  );
};

export default Notification;

const notificationStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    padding: 10,
    height: "max-content",
    borderLeftColor: "#a52a2a",
    borderLeftWidth: 10,
  },
});
