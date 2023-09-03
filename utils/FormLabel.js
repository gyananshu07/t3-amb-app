import { Text } from "react-native-paper";
import React from "react";
import styles from "../GlobalStyles";

const FormLabel = ({ label }) => {
  return <Text style={styles.formLabel}>{label}</Text>;
};

export default FormLabel;
