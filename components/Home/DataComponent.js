import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import React from "react";

const DataComponent = () => {
  return (
    <View style={{ padding: 10, gap: 20 }}>
      <Surface style={styles.subCard}>
        <Text style={styles.reportSubText}>
          Remaining Follow Up Dues Beneficiary
        </Text>
        <Text variant="headlineSmall" style={{ fontFamily: "Poppins-Bold" }}>
          1
        </Text>
      </Surface>

      <Surface style={styles.subCard}>
        <Text style={styles.reportSubText}>Inventory Summary</Text>
      </Surface>
    </View>
  );
};

export default DataComponent;

const styles = StyleSheet.create({
  reportSubText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  subCard: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 90,
    gap: 10,
    borderLeftColor: "#a52a2a",
    borderLeftWidth: 5,
  },
});
