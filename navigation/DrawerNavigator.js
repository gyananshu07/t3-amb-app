import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Pressable } from "react-native";
import CustomDrawer from "../utils/CustomDrawer";
import { StatusBar } from "expo-status-bar";
import AddBeneficiaryScreen from "../screens/TabScreens/AddBeneficiaryScreen";
import ProfileScreen from "../screens/TabScreens/ProfileScreen";
import SOSScreen from "../screens/TabScreens/SOSScreen";
import CounselingScreen from "../screens/DrawerScreens/CounselingScreen";
import RegisterComplaint from "../screens/DrawerScreens/RegisterComplaintScreen";
import ChangePasswordScreen from "../screens/DrawerScreens/ChangePasswordScreen";
import InventoryRequestScreen from "../screens/DrawerScreens/InventoryRequestScreen";
import AboutUsScreen from "../screens/DrawerScreens/AboutUsScreen";
import ContactUsScreen from "../screens/DrawerScreens/ContactUsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="#a52a2a" style="light" />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: "#333",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontFamily: "Poppins-Medium",
            fontSize: 15,
            marginLeft: -20,
            justifyContent: "center",
          },
          headerRightContainerStyle: { paddingHorizontal: 20 },
          headerRight: () => (
            <Pressable onPress={() => console.log("Synced")}>
              <MaterialCommunityIcons
                name="cloud-sync-outline"
                size={30}
                color="black"
              />
            </Pressable>
          ),
        }}
      >
        <Drawer.Screen
          name="Tab"
          options={{
            drawerLabel: "Home",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
          }}
          component={TabNavigator}
        />

        <Drawer.Screen
          name="Beneficiary"
          options={{
            drawerLabel: "Beneficiary",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="clipboard-edit-outline"
                size={24}
                color="black"
              />
            ),
          }}
          component={AddBeneficiaryScreen}
        />

        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color="black"
              />
            ),
          }}
          component={ProfileScreen}
        />

        <Drawer.Screen
          name="SOS"
          options={{
            drawerLabel: "SOS",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="comment-alert-outline"
                size={24}
                color="black"
              />
            ),
          }}
          component={SOSScreen}
        />

        <Drawer.Screen
          name="Counseling"
          options={{
            drawerLabel: "Counseling",
            drawerIcon: () => (
              <MaterialCommunityIcons name="headset" size={24} color="black" />
            ),
          }}
          component={CounselingScreen}
        />

        <Drawer.Screen
          name="Register Complaint"
          options={{
            drawerLabel: "Register Complaint",
            drawerIcon: () => (
              <MaterialIcons name="report-problem" size={24} color="black" />
            ),
          }}
          component={RegisterComplaint}
        />

        <Drawer.Screen
          name="Change Password"
          options={{
            drawerLabel: "Change Password",
            drawerIcon: () => (
              <MaterialIcons name="lock-outline" size={24} color="black" />
            ),
          }}
          component={ChangePasswordScreen}
        />

        <Drawer.Screen
          name="Inventory Request"
          options={{
            drawerLabel: "Inventory Request",
            drawerIcon: () => (
              <MaterialIcons name="inventory" size={24} color="black" />
            ),
          }}
          component={InventoryRequestScreen}
        />

        <Drawer.Screen
          name="About Us"
          options={{
            drawerLabel: "About Us",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="information-variant"
                size={24}
                color="black"
              />
            ),
          }}
          component={AboutUsScreen}
        />

        <Drawer.Screen
          name="Contact Us"
          options={{
            drawerLabel: "Contact Us",
            drawerIcon: () => (
              <MaterialCommunityIcons name="phone" size={24} color="black" />
            ),
          }}
          component={ContactUsScreen}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
