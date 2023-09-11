import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import BeneficiaryCard from "../../components/AddBeneficiary/Card";
import { BeneficiaryCardData } from "../../data/BeneficiaryCardData";
import { PaperProvider } from "react-native-paper";

const AddBeneficiaryScreen = () => {
  return (
    <PaperProvider>
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={componentStyle.container}
          numColumns={2}
          data={BeneficiaryCardData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <BeneficiaryCard
                text={item.text}
                imageUrl={item.imageUrl}
                screenName={item.text}
              />
            );
          }}
        />
      </View>
    </PaperProvider>
  );
};

export default AddBeneficiaryScreen;

const componentStyle = StyleSheet.create({
  container: {
    marginVertical: 5,
    gap: 10,
    flex: 1,
    justifyContent: "space-around",
  },
});
