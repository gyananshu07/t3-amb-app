import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Button, Text } from "react-native-paper";

import TextInputIcon from "../../utils/TextInputIcon";
import FormLabel from "../../utils/FormLabel";
import SelectOptions from "../../utils/SelectOptions";
import CalendarInput from "../../utils/CalendarInput";

import styles from "../../GlobalStyles";

import { casteList, genderList, villageList } from "../../data/Lists";

import * as ImagePicker from "expo-image-picker";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const currentAge = new Date() - selectedDate;
  // 0 Years 8 Months 0 Days

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <>
      <View style={componentStyles.headerTabs}>
        <View style={componentStyles.headerTab}>
          <Text
            variant="titleMedium"
            style={[styles.fontMedium, { color: "white", textAlign: "center" }]}
          >
            Personal
          </Text>
        </View>

        <View style={[componentStyles.headerTab, { backgroundColor: "#ccc" }]}>
          <Text
            variant="titleMedium"
            style={[styles.fontMedium, { color: "white", textAlign: "center" }]}
          >
            Test
          </Text>
        </View>

        <View style={[componentStyles.headerTab, { backgroundColor: "#ccc" }]}>
          <Text
            variant="titleMedium"
            style={[styles.fontMedium, { color: "white", textAlign: "center" }]}
          >
            Treatment
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Pressable style={styles.row} onPress={pickImage}>
          <MaterialIcons name="qr-code-scanner" size={24} color="black" />
          <Text
            variant="bodySmall"
            style={[styles.themeColor, styles.fontRegular]}
          >
            Scan Aadhar Card for auto fill the beneficiary details
          </Text>
        </Pressable>

        <View>
          <Text style={styles.formLabel}>Primary Name*</Text>
          <TextInputIcon
            placeholder="Enter Primary Name"
            inputIcon={<Ionicons name="person" size={24} color="black" />}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Primary Mobile Number*</Text>
          <TextInputIcon
            placeholder="Enter primary mobile number"
            inputIcon={<AntDesign name="mobile1" size={24} color="black" />}
          />
        </View>

        <View>
          <FormLabel label="Beneficiary Name*" />
          <TextInputIcon
            placeholder="Enter Primary Name"
            inputIcon={<Ionicons name="person" size={24} color="black" />}
          />
        </View>

        <View>
          <FormLabel label="Select Gender*" />
          <SelectOptions options={genderList} placeholder="Select Gender" />
        </View>

        <View>
          <FormLabel label="Select Primary Caste*" />
          <SelectOptions options={casteList} placeholder="Select Caste" />
        </View>

        <View>
          <FormLabel label="Aadhar Number*" />
          <TextInputIcon
            placeholder="Enter Aadhar Number"
            inputIcon={<AntDesign name="idcard" size={24} color="black" />}
          />
        </View>

        <View>
          <FormLabel label="Select Village*" />
          <SelectOptions options={villageList} placeholder="Select Village" />
        </View>

        <View>
          <FormLabel label="Address*" />
          <TextInputIcon
            multiline
            placeholder="Enter Complete Address"
            inputIcon={<AntDesign name="idcard" size={24} color="black" />}
          />
        </View>

        <View style={styles.formGroup}>
          <FormLabel label="Select DOB*" />
          <Pressable
            onPress={() => {
              setOpen(true);
            }}
          >
            <View style={styles.calendarRow}>
              <AntDesign name="calendar" size={24} color="black" />
              <Text>DD-MM-YYYY</Text>
              <CalendarInput
                isVisible={open}
                setIsVisible={setOpen}
                setSelectedDate={setSelectedDate}
              />
            </View>
          </Pressable>

          <TextInputIcon
            disabled
            placeholder="Age"
            inputIcon={<AntDesign name="calendar" size={24} color="black" />}
          />
        </View>

        <Button
          mode="outlined"
          textColor="#a52a2a"
          style={[styles.outlinedButton, { paddingHorizontal: 20 }]}
        >
          <Text style={styles.outlineButtonText}>Save & Next</Text>
        </Button>
      </View>
    </>
  );
};

export default Form;

const componentStyles = StyleSheet.create({
  headerTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
  },
  headerTab: {
    backgroundColor: "#a52a2a",
    borderRadius: 20,
    padding: 10,
    color: "white",
    textAlign: "center",
    flex: 1 / 4,
  },
});
