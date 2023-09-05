import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const BeneficiaryReport = () => {
  return (
    <View style={styles.headingContainer}>
      <Text variant="titleMedium" style={{ fontFamily: "Poppins-SemiBold" }}>
        Beneficiary Report
      </Text>
      <View
        style={{
          borderBottomColor: "#a52a2a",
          borderBottomWidth: 2,
          width: 60,
        }}
      ></View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={[
            styles.reportCard,
            {
              backgroundColor: "#a52a2a",
            },
          ]}
        >
          <Text style={styles.reportText}>1</Text>
          <Text style={styles.reportText}>Normal</Text>
        </View>

        <View
          style={[
            styles.reportCard,
            {
              backgroundColor: "#b75555",
            },
          ]}
        >
          <Text style={styles.reportText}>0</Text>
          <Text style={styles.reportText}>Mild</Text>
        </View>

        <View
          style={[
            styles.reportCard,
            {
              backgroundColor: "#c06a6a",
            },
          ]}
        >
          <Text style={styles.reportText}>0</Text>
          <Text style={styles.reportText}>Moderate</Text>
        </View>

        <View
          style={[
            styles.reportCard,
            {
              backgroundColor: "#c97f7f",
            },
          ]}
        >
          <Text style={styles.reportText}>0</Text>
          <Text style={styles.reportText}>Severe</Text>
        </View>
      </View>
    </View>
  );
};

export default BeneficiaryReport;

const styles = StyleSheet.create({
  headingContainer: { padding: 10, fontFamily: "Poppins-SemiBold" },
  reportCard: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 90,
  },
  reportText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
});
