import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const SubHeader = ({ text }) => {
  return (
    <View>
      <Text variant="titleMedium" style={{ fontFamily: "Poppins-SemiBold" }}>
        {text}
      </Text>
      <View
        style={{
          borderBottomColor: "#a52a2a",
          borderBottomWidth: 2,
          width: 60,
        }}
      ></View>
    </View>
  );
};

export default SubHeader;
