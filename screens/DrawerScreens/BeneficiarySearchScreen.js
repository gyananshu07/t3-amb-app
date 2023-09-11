import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CustomModal from "../../components/BeneficiarySeach/Modal";
import { Button, PaperProvider, Surface, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import styles from "../../GlobalStyles";
import CalendarInput from "../../utils/CalendarInput";
import SelectOptions from "../../utils/SelectOptions";
import { typeList, villageList } from "../../data/Lists";
import { AntDesign, Feather } from "@expo/vector-icons";

const BeneficiarySearchScreen = () => {
  const [visible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const navigation = useNavigation();

  const handleHide = () => {
    navigation.goBack();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <CustomModal
        visible={visible}
        onHide={handleHide}
        onClose={handleClose}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <View style={modalStyles.filter}>
          <Text
            variant="bodySmall"
            style={[styles.fontRegular, { color: "black", fontSize: 12 }]}
          >
            Village Name
          </Text>
          <SelectOptions options={villageList} />
        </View>

        <View style={modalStyles.filter}>
          <Text
            variant="bodySmall"
            style={[styles.fontRegular, { color: "black", fontSize: 12 }]}
          >
            Beneficiary Type
          </Text>
          <SelectOptions options={typeList} />
        </View>

        <View style={modalStyles.filter}>
          <Text
            variant="bodySmall"
            style={[styles.fontRegular, { color: "black", fontSize: 12 }]}
          >
            Follow Up Date
          </Text>
          <View style={styles.calendarRow}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>DD-MM-YYYY</Text>
            <CalendarInput
              isVisible={open}
              setIsVisible={setOpen}
              setSelectedDate={setSelectedDate}
            />
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, flexDirection: "row", gap: 10 }}>
        <Button
          mode="outlined"
          textColor="#a52a2a"
          style={[styles.outlinedButton, { flex: 0.5 }]}
        >
          <Text style={styles.outlineButtonText}>Reset Filter</Text>
        </Button>

        <Button
          mode="outlined"
          textColor="#a52a2a"
          style={[styles.outlinedButton, { flex: 0.5 }]}
        >
          <Text style={styles.outlineButtonText}>Apply Filter</Text>
        </Button>
      </View>

      <Surface
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 5,
          margin: 20,
          padding: 10,
          gap: 10,
          height: "max-content",
        }}
      >
        <View
          style={{
            backgroundColor: "#E8E8E8",
            width: 120,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#a52a2a",
              borderRadius: 50,
              width: 100,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              variant="bodyLarge"
              style={[styles.fontMedium, { fontSize: 18, color: "white" }]}
            >
              UN
            </Text>
          </View>
          <Text
            variant="bodyLarge"
            style={[
              styles.fontMedium,
              {
                fontSize: 14,
                color: "black",
                textAlign: "center",
                textAlignVertical: "center",
              },
            ]}
          >
            Children 6-59 Months
          </Text>
        </View>

        <View style={{ gap: 5 }}>
          <Text variant="titleMedium" style={[styles.fontSemiBold]}>
            User Name
          </Text>
          <Text variant="titleSmall" style={[styles.fontRegular]}>
            Mobile: 99999 99999
          </Text>
          <Text variant="titleSmall" style={[styles.fontRegular]}>
            Recent Test Date: 01-01-2023
          </Text>
          <Text variant="titleSmall" style={[styles.fontRegular]}>
            Follow Up Date: 01-01-2023
          </Text>
          <Text variant="titleSmall" style={[styles.fontRegular]}>
            Village Name: Sample Village
          </Text>
          <Text variant="titleSmall" style={[styles.fontRegular]}>
            Facility Name: Sample Facility
          </Text>
        </View>

        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Pressable>
            <Feather name="more-vertical" size={36} color="black" />
          </Pressable>
        </View>
      </Surface>
    </>
  );
};

export default BeneficiarySearchScreen;

const modalStyles = StyleSheet.create({
  filter: {
    flex: 1,
  },
});
