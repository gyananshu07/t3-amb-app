import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";

import styles from "../../GlobalStyles";
import TextInputIcon from "../../utils/TextInputIcon";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import ReactNativeModal from "react-native-modal";

const CustomModal = ({ onHide, visible, onClose }) => {
  const [value, setValue] = React.useState("Search by Mobile");

  const handlePress = () => {
    onClose();
  };

  return (
    <>
      <ReactNativeModal
        animationType="fade"
        onDismiss={onHide}
        avoidKeyboard={true}
        isVisible={visible}
        hasBackdrop={true}
        backdropColor="black"
        backdropOpacity={0.5}
      >
        <View
          style={{
            backgroundColor: "white",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
        >
          <View style={modalStyles.topHeader}>
            <Text
              variant="titleMedium"
              style={[
                styles.fontSemiBold,
                { color: "white", textAlign: "center", flex: 1 },
              ]}
            >
              GO FOR BENEFICIARY DETAILS
            </Text>
          </View>

          <View
            style={{
              height: "max-content",
              alignItems: "center",
              margin: 15,
              gap: 20,
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View
                style={[
                  styles.radioGroup,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 15,
                  },
                ]}
              >
                <View
                  style={[
                    styles.radioButton,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <RadioButton value="Search by Mobile" color="#a52a2a" />
                  <Text
                    style={[
                      styles.radioLabel,
                      { color: "black", fontFamily: "Poppins-Medium" },
                    ]}
                  >
                    Search by Mobile
                  </Text>
                </View>
                <View
                  style={[
                    styles.radioButton,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <RadioButton value="Search by Name" color="#a52a2a" />
                  <Text
                    style={[
                      styles.radioLabel,
                      { color: "black", fontFamily: "Poppins-Medium" },
                    ]}
                  >
                    Search by Name
                  </Text>
                </View>
              </View>
            </RadioButton.Group>

            <TextInputIcon
              placeholder={
                value === "Search by Mobile"
                  ? "Search by Mobile Number"
                  : "Search by Name"
              }
              inputIcon={
                value === "Search by Mobile" ? (
                  <AntDesign name="mobile1" size={24} color="black" />
                ) : (
                  <Ionicons name="person" size={24} color="black" />
                )
              }
            />

            <Button
              mode="outlined"
              textColor="#a52a2a"
              style={[styles.outlinedButton, { paddingHorizontal: 20 }]}
              onPress={handlePress}
            >
              <Text style={styles.outlineButtonText}>Next</Text>
            </Button>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default CustomModal;

const modalStyles = StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: "#a52a2a",
    height: 50,
    padding: 10,
  },

  filter: {
    flex: 1,
  },
});
