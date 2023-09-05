import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const SelectOptions = ({ options, placeholder }) => {
  const [user, setUser] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        dropdownPosition="auto"
        itemTextStyle={{ fontFamily: "Poppins-Regular" }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        fontFamily="Poppins-Regular"
        data={options}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={user}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setUser(item.value);
        }}
      />
    </View>
  );
};

export default SelectOptions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 5,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    borderColor: "#a52a2a",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
});
