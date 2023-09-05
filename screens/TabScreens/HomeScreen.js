import { Card, Text } from "react-native-paper";
import React from "react";
import { View, StyleSheet } from "react-native";

import Dashboard from "../../components/Home/Dashboard";
import BeneficiaryReport from "../../components/Home/BeneficiaryReport";
import DataComponent from "../../components/Home/DataComponent";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Dashboard />
        <BeneficiaryReport />
        <DataComponent />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
  },
});
