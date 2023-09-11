import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import SubHeader from "../../utils/SubHeader";
import CustomVideoCard from "../../components/Counseling/CustomVideoCard";
import { SafeAreaView } from "react-native-safe-area-context";

const CounselingScreen = () => {
  return (
    <SafeAreaView style={counselingStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 20 }}
      >
        <SubHeader text="Women of Reproductive Age" />
        <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />

        <SubHeader text="Pregnant Women" />
        <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />

        <SubHeader text="Lactating Women" />
        <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />

        <SubHeader text="Adolescent 10-19 Years" />
        <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />

        <SubHeader text="Children 5-9 Years" />
        <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />

        <SubHeader text="Children 6-59 Months" />
        <CustomVideoCard imageSource="../../assets/icons/LogoAmb.png" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CounselingScreen;

const counselingStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
