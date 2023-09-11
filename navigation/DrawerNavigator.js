import React from "react";
import { Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import CustomDrawer from "../utils/CustomDrawer";
import {
  BeneficiarySearchTabNavigator,
  HomeTabNavigator,
  ProfileTabNavigator,
  RegisterComplaintTabNavigator,
  SOSTabNavigator,
} from "./TabNavigator";
import {
  AboutStackNavigator,
  ChangePasswordStackNavigator,
  ContactStackNavigator,
  CounselingStackNavigator,
  InventoryRequestStackNavigator,
} from "./StackNavigator";

import DownloadMPRScreen from "../screens/DrawerScreens/DownloadMPRScreen";

import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const screenOptions = {
  drawerActiveTintColor: "#333",
  drawerInactiveTintColor: "#333",
  drawerLabelStyle: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    marginLeft: -20,
    justifyContent: "center",
  },
  headerTitleStyle: {
    fontFamily: "Poppins-SemiBold",
    color: "#333",
  },
  headerTitleAlign: "center",
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
};

const DrawerNavigator = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="#a52a2a" style="light" />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={screenOptions}
      >
        <Drawer.Screen
          name="HomeTab"
          options={{
            title: "User Name",
            drawerLabel: "Home",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={HomeTabNavigator}
        />

        <Drawer.Screen
          name="SearchBeneficiaryTab"
          options={{
            title: "Beneficiary Search",
            drawerLabel: "Beneficiary",
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="clipboard-edit-outline"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={BeneficiarySearchTabNavigator}
        />

        <Drawer.Screen
          name="ProfileTab"
          options={{
            title: "Profile",
            drawerLabel: "Profile",
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={ProfileTabNavigator}
        />

        <Drawer.Screen
          name="SOSTab"
          options={{
            title: "SOS",
            drawerLabel: "SOS",
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="comment-alert-outline"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={SOSTabNavigator}
        />

        <Drawer.Screen
          name="CounselingStack"
          options={{
            title: "Counseling",
            drawerLabel: "Counseling",
            headerShown: false,
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="headset"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={CounselingStackNavigator}
        />

        <Drawer.Screen
          name="RegisterComplaintTab"
          options={{
            title: "Register Complaint",
            drawerLabel: "Register Complaint",
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="report-problem"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={RegisterComplaintTabNavigator}
        />

        <Drawer.Screen
          name="ChangePasswordStack"
          options={{
            title: "Change Password",
            drawerLabel: "Change Password",
            headerShown: false,
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="lock-outline"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={ChangePasswordStackNavigator}
        />

        <Drawer.Screen
          name="InventoryRequestStack"
          options={{
            title: "Inventory Request",
            drawerLabel: "Inventory Request",
            headerShown: false,
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="inventory"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={InventoryRequestStackNavigator}
        />

        <Drawer.Screen
          name="Download MPR"
          options={{
            drawerLabel: "Download MPR",
            headerShown: false,
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="file-download"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={DownloadMPRScreen}
        />

        <Drawer.Screen
          name="AboutUsStack"
          options={{
            title: "About Us",
            drawerLabel: "About Us",
            headerShown: false,
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="information-variant"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={AboutStackNavigator}
        />

        <Drawer.Screen
          name="ContactUsStack"
          options={{
            title: "Contact Us",
            drawerLabel: "Contact Us",
            headerShown: false,
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="phone"
                size={24}
                color={focused ? "#a52a2a" : "black"}
              />
            ),
          }}
          component={ContactStackNavigator}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
