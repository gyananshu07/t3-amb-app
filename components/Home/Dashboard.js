import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import React from "react";
import SelectOptions from "../../utils/SelectOptions";
import { typeList } from "../../data/Lists";

const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <Surface
        style={{
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <View style={styles.cardHeader}>
          <Text
            variant="titleMedium"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            DASHBOARD
          </Text>
          <View style={{ width: 150 }}>
            <SelectOptions options={typeList} />
          </View>
        </View>
      </Surface>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  dashboardContainer: {
    padding: 10,
    fontFamily: "Poppins-SemiBold",
  },
});
