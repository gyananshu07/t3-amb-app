import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Modal, Portal, Text, TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import styles from "../../GlobalStyles";
import { complaintList } from "../../data/Lists";
import SelectOptions from "../../utils/SelectOptions";

const CustomModal = ({ onHide, visible }) => {
  const [text, setText] = React.useState("");
  const [height, setHeight] = React.useState(undefined);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onHide}
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
            REGISTER COMPLAINT
          </Text>
          <Pressable onPress={onHide}>
            <Entypo name="cross" size={28} color="white" />
          </Pressable>
        </View>

        <View style={complaintStyles.contentContainer}>
          <Text style={[styles.fontSemiBold, { color: "black" }]}>
            Select complaint related item*
          </Text>
          <SelectOptions options={complaintList} />
          <TextInput
            multiline
            onContentSizeChange={(event) => {
              setHeight(event.nativeEvent.contentSize.height);
            }}
            mode="outlined"
            selectionColor="#a52a2a"
            outlineColor="#a52a2a"
            activeOutlineColor="#a52a2a"
            contentStyle={{ fontFamily: "Poppins-Regular" }}
            style={{ backgroundColor: "white", height: 100 }}
            placeholder="Add complaint here"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button
            mode="outlined"
            textColor="#a52a2a"
            style={[
              styles.outlinedButton,
              { paddingHorizontal: 20, marginTop: 15 },
            ]}
            onPress={onHide}
          >
            <Text style={styles.outlineButtonText}>SUBMIT</Text>
          </Button>
        </View>
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
