import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderBackButton = ({ color }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBack}>
      <Ionicons name="arrow-back-circle-outline" size={28} color={color} />
    </TouchableOpacity>
  );
};

export default CustomHeaderBackButton;
