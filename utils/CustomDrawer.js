import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import styles from "../GlobalStyles";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="#a52a2a" style="light" />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#a52a2a", color: "white" }}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/icons/emblem-white.png")}
            style={{
              height: 100,
              width: 100,
              marginLeft: -10,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "Poppins-Medium",
              marginBottom: 5,
            }}
          >
            Hi! Developer
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins-Regular",
            }}
          >
            +91 99999 99999
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={styles.row}>
            <Ionicons name="exit-outline" size={24} color="black" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Poppins-Medium",
                marginLeft: 12,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
