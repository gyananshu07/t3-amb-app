import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import SubHeader from "../../utils/SubHeader";
import CustomVideoCard from "../../components/Counseling/CustomVideoCard";

const CounselingScreen = () => {
  return (
    <View style={counselingStyles.container}>
      <SubHeader text="Women of Reproductive Age" />
      <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />
      <SubHeader text="Pregnant Women" />
      <SubHeader text="Lactating Women" />
      <SubHeader text="Adolescent 10-19 Years" />
      <SubHeader text="Children 5-9 Years" />
      <SubHeader text="Children 6-59 Months" />
    </View>
  );
};

export default CounselingScreen;

const counselingStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
