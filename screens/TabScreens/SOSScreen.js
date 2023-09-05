import React from "react";
import { View, StyleSheet } from "react-native";
import SOSButton from "../../components/SOS/SOSButton";
import { Text } from "react-native-paper";

const SOSScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ fontFamily: "Poppins-SemiBold" }}>
        Emergency Help Needed?
      </Text>
      <SOSButton />

      <Text variant="bodyLarge" style={{ fontFamily: "Poppins-Regular" }}>
        Just tap the button to call
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
});

export default SOSScreen;
