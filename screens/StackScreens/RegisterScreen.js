import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "../../GlobalStyles";

import FormLabel from "../../utils/FormLabel";
import TextInputIcon from "../../utils/TextInputIcon";
import SelectOptions from "../../utils/SelectOptions";
import CalendarInput from "../../utils/CalendarInput";
import RadioInput from "../../utils/RadioInput";
import {
  userList,
  genderList,
  stateList,
  districtList,
  blockList,
  CHCList,
  subCenterList,
} from "../../data/Lists";

const RegisterScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [selectedDate, setSelectedDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ width: "100%" }}
      >
        <View style={styles.registrationContainer}>
          <Text variant="titleMedium" style={styles.FormHeaderText}>
            PERSONAL INFORMATION
          </Text>

          <View style={styles.registerForm}>
            <View style={styles.formGroup}>
              <FormLabel label="Select User*" />
              <SelectOptions options={userList} placeholder="Select User" />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Full User Name*" />
              <TextInputIcon
                placeholder="Enter Full Name"
                inputIcon={
                  <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color="black"
                  />
                }
              />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Mobile Number*" />
              <TextInputIcon
                placeholder="Mobile Number"
                inputIcon={<AntDesign name="mobile1" size={24} color="black" />}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Select Gender*" />
              <SelectOptions options={genderList} placeholder="Select Gender" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Select DOB*</Text>

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
            </View>
          </View>

          <Text variant="titleMedium" style={[styles.FormHeaderText]}>
            GEOGRAPHICAL INFORMATION
          </Text>

          <View style={styles.registerForm}>
            <View style={styles.formGroup}>
              <FormLabel label="Select State*" />
              <SelectOptions options={stateList} placeholder="Select State" />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Select District*" />
              <SelectOptions
                options={districtList}
                placeholder="Select District"
              />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Select Block*" />
              <SelectOptions options={blockList} placeholder="Select Block" />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Select CHC*" />
              <SelectOptions options={CHCList} placeholder="Select CHC" />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Select Sub-Center*" />
              <SelectOptions
                options={subCenterList}
                placeholder="Select Sub-Center"
              />
            </View>
          </View>

          <Text variant="titleMedium" style={[styles.FormHeaderText]}>
            INFORMATION OF INSTRUMENT
          </Text>

          <View style={styles.registerForm}>
            <View style={styles.formGroup}>
              <FormLabel label="Is Digital Hemoglobinometer available?" />
              <RadioInput first="Yes" second="No" />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Is Digital Hemoglobinometer functional?" />
              <RadioInput first="Yes" second="No" />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Have you received any training to use the hemoglobinometer?" />
              <RadioInput first="Yes" second="No" />
            </View>
          </View>

          <Text variant="titleMedium" style={[styles.FormHeaderText]}>
            CREATE PASSWORD
          </Text>

          <View style={styles.registerForm}>
            <View style={styles.formGroup}>
              <FormLabel label="Password*" />
              <TextInputIcon
                placeholder="Enter Password"
                inputIcon={
                  <MaterialIcons name="lock" size={24} color="black" />
                }
                secureTextEntry={secureTextEntry}
                right={
                  <TextInput.Icon
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    icon={() =>
                      secureTextEntry ? (
                        <MaterialCommunityIcons
                          name="eye"
                          size={24}
                          color="black"
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="eye-off"
                          size={24}
                          color="black"
                        />
                      )
                    }
                  />
                }
              />
            </View>

            <View style={styles.formGroup}>
              <FormLabel label="Confirm Password*" />
              <TextInputIcon
                placeholder="Enter Confirm Password"
                inputIcon={
                  <MaterialIcons name="lock" size={24} color="black" />
                }
                secureTextEntry={secureTextEntry}
                right={
                  <TextInput.Icon
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    icon={() =>
                      secureTextEntry ? (
                        <MaterialCommunityIcons
                          name="eye"
                          size={24}
                          color="black"
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="eye-off"
                          size={24}
                          color="black"
                        />
                      )
                    }
                  />
                }
              />
            </View>
          </View>

          <Button
            mode="outlined"
            textColor="#a52a2a"
            style={[styles.outlinedButton, { paddingHorizontal: 20 }]}
          >
            <Text style={styles.outlineButtonText}>REGISTER</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
