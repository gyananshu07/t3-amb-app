import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderBackButton = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBack}>
      <Ionicons name="arrow-back-circle-sharp" size={28} color="white" />
    </TouchableOpacity>
  );
};

export default CustomHeaderBackButton;
