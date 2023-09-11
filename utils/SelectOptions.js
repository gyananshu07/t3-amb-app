import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const SelectOptions = ({ options, placeholder, ...props }) => {
  const [user, setUser] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        {...props}
        style={[styles.dropdown]}
        dropdownPosition="auto"
        itemTextStyle={{ fontFamily: "Poppins-Regular", flexWrap: "nowrap" }}
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
    flexWrap: "nowrap",
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    borderColor: "#a52a2a",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    flexWrap: "nowrap",
  },
  icon: {
    marginRight: 5,
    flexWrap: "nowrap",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    flexWrap: "nowrap",
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    flexWrap: "nowrap",
  },
  iconStyle: {
    width: 25,
    height: 25,
    flexWrap: "nowrap",
  },
});
