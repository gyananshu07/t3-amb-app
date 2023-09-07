import { View } from "react-native";
import React from "react";
import styles from "../../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { FAB, Text, Provider as PaperProvider } from "react-native-paper";

import CustomModal from "../../components/RegisterComplaint/Modal";

const RegisterComplaintScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(!visible);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <CustomModal onHide={hideModal} visible={visible} />

      <View style={styles.container}>
        <Text style={[styles.fontMedium, { color: "black" }]}>
          No Data Found
        </Text>
        <FAB
          rippleColor="white"
          variant="surface"
          icon={() => <FontAwesome5 name="plus" size={24} color="#a52a2a" />}
          style={styles.fab}
          onPress={showModal}
        />
      </View>
    </PaperProvider>
  );
};

export default RegisterComplaintScreen;
