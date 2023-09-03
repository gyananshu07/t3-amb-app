import { StyleSheet, View } from "react-native";
import React from "react";

const Spacer = () => {
  return <View style={styles.spacerStyle} />;
};

export default Spacer;

const styles = StyleSheet.create({
  spacerStyle: {
    marginBottom: 15,
  },
});
