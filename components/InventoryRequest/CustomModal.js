import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Modal, Portal, Text, TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import styles from "../../GlobalStyles";
import { requestItems } from "../../data/constants";

const CustomModal = ({ onHide, visible }) => {
  const [textValues, setTextValues] = useState(
    Array(requestItems.length).fill("")
  );

  const handleTextChange = (text, index) => {
    const newTextValues = [...textValues];
    newTextValues[index] = text;
    setTextValues(newTextValues);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onHide}
        style={{ paddingBottom: 25 }}
        contentContainerStyle={complaintStyles.containerStyle}
      >
        <View style={complaintStyles.topHeader}>
          <Text
            variant="titleMedium"
            style={[
              styles.fontSemiBold,
              { color: "white", textAlign: "center", flex: 1 },
            ]}
          >
            ADD REQUEST
          </Text>
          <Pressable onPress={onHide}>
            <Entypo name="cross" size={28} color="white" />
          </Pressable>
        </View>

        <ScrollView>
          <View style={complaintStyles.contentContainer}>
            <Text
              variant="titleMedium"
              style={[styles.fontSemiBold, { color: "black", fontSize: 18 }]}
            >
              Select Item*
            </Text>

            {requestItems.map((item, index) => {
              return (
                <View
                  style={[styles.row, { justifyContent: "space-between" }]}
                  key={item.id}
                >
                  <Text style={[styles.fontMedium, { color: "black" }]}>
                    {item.name}
                  </Text>
                  <TextInput
                    keyboardType="number-pad"
                    mode="flat"
                    selectionColor="#a52a2a"
                    underlineColor="#a52a2a"
                    activeUnderlineColor="#a52a2a"
                    contentStyle={{
                      fontFamily: "Poppins-Medium",
                      color: "#333",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                    placeHo
                    style={{ backgroundColor: "white", height: 30, width: 70 }}
                    placeholder="0"
                    value={textValues[index]}
                    onChangeText={(text) => handleTextChange(text, index)}
                  />
                </View>
              );
            })}

            <Button
              mode="outlined"
              textColor="#a52a2a"
              style={[
                styles.outlinedButton,
                { paddingHorizontal: 20, marginTop: 15 },
              ]}
              onPress={onHide}
            >
              <Text style={styles.outlineButtonText}>SEND REQUEST</Text>
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default CustomModal;

const complaintStyles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 5,
    height: "max-content",
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    height: "max-content",
    gap: 10,
  },
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
});
