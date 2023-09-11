import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Modal, Portal, Surface, Text } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import styles from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const trimester = [
  {
    id: 1,
    text: "1st Trimester",
    description: "(1-3 Months)",
  },
  {
    id: 2,
    text: "2nd Trimester",
    description: "(4-6 Months)",
  },
  {
    id: 3,
    text: "3rd Trimester",
    description: "(6-9 Months)",
  },
];

const CustomModal = ({ onHide, visible }) => {
  const navigation = useNavigation();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onHide}
        style={{ paddingBottom: 25 }}
        contentContainerStyle={modalStyles.container}
      >
        <View style={modalStyles.topHeader}>
          <Pressable onPress={onHide}>
            <Entypo name="cross" size={28} color="white" />
          </Pressable>
          <Text
            variant="titleMedium"
            style={[
              styles.fontSemiBold,
              { color: "white", textAlign: "center", flex: 1 },
            ]}
          >
            SELECT TRIMESTER
          </Text>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={modalStyles.flatList}
            data={trimester}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Surface
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: 5,
                    padding: 10,
                    width: 180,
                    height: "max-content",
                  }}
                >
                  <Pressable
                    style={{ gap: 5 }}
                    onPress={() => navigation.navigate("Pregnant Women")}
                  >
                    <Image
                      style={{
                        width: 90,
                        height: 90,
                      }}
                      resizeMode="contain"
                      source={{
                        uri: "https://res.cloudinary.com/daxilgrvn/image/upload/v1692689736/Project_A/kpi-card-img-5_vig3ov.jpg",
                      }}
                    />
                    <Text
                      variant="bodyMedium"
                      style={[styles.fontMedium, { color: "black" }]}
                    >
                      {item.text}
                    </Text>
                    <Text
                      variant="bodyMedium"
                      style={[styles.fontMedium, { color: "black" }]}
                    >
                      {item.description}
                    </Text>
                  </Pressable>
                </Surface>
              );
            }}
          />
        </View>
      </Modal>
    </Portal>
  );
};

export default CustomModal;

const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 5,
    height: "max-content",
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
  flatList: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
