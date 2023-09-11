import { ScrollView } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../../../components/AddBeneficiary/Form";

const Children659MScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ gap: 20, paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Children659MScreen;
