import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const RadioInput = ({ first, second }) => {
  const [value, setValue] = React.useState(first);

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
    >
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton value={first} color="#a52a2a" />
          <Text style={styles.radioLabel}>{first}</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value={second} color="#a52a2a" />
          <Text style={styles.radioLabel}>{second}</Text>
        </View>
      </View>
    </RadioButton.Group>
  );
};

export default RadioInput;

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: { fontFamily: "Poppins-SemiBold" },
});
