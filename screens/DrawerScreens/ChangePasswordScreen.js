import React, { useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
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

const ChangePasswordScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [selectedDate, setSelectedDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="dark" />

      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          variant="headlineSmall"
          style={[
            styles.fontSemiBold,
            { textAlign: "left", alignSelf: "flex-start", paddingBottom: 15 },
          ]}
        >
          CHANGE PASSWORD
        </Text>
        <View style={styles.registerForm}>
          <View style={styles.formGroup}>
            <FormLabel label="Current Password*" />
            <TextInputIcon
              placeholder="Enter Current Password"
              inputIcon={<MaterialIcons name="lock" size={24} color="black" />}
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
            <FormLabel label="New Password*" />
            <TextInputIcon
              placeholder="Enter New Password"
              inputIcon={<MaterialIcons name="lock" size={24} color="black" />}
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
          <Text style={styles.outlineButtonText}>SUBMIT</Text>
        </Button>
      </View>
    </>
  );
};

export default ChangePasswordScreen;
