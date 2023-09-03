import React from "react";
import { TextInput } from "react-native-paper";
import styles from "../GlobalStyles";

const TextInputIcon = ({ label, inputIcon, placeholder, ...rest }) => {
  return (
    <TextInput
      mode="outlined"
      selectionColor="#a52a2a"
      outlineColor="#a52a2a"
      activeOutlineColor="#a52a2a"
      contentStyle={{ fontFamily: "Poppins-Regular" }}
      label={label ? label : false}
      style={styles.input}
      left={<TextInput.Icon icon={() => inputIcon} />}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInputIcon;
