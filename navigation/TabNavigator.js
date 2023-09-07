import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/TabScreens/HomeScreen";
import ProfileScreen from "../screens/TabScreens/ProfileScreen";
import AddBeneficiaryScreen from "../screens/TabScreens/AddBeneficiaryScreen";
import SOSScreen from "../screens/TabScreens/SOSScreen";

import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import NotificationsTopTabNavigator from "./TopTabNavigator";
import { AddBeneficiaryStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={28}
              color={focused ? "#631919" : "#a52a2a"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={focused ? "#631919" : "#a52a2a"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={AddBeneficiaryStackNavigator}
        options={{
          tabBarIconStyle: { alignSelf: "center", justifyContent: "center" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-add-circle"
              size={60}
              color={focused ? "#631919" : "#a52a2a"}
            />
          ),
          tabBarLabel: () => false,
        }}
      />

      <Tab.Screen
        name="SOS"
        component={SOSScreen}
        options={{
          tabBarLabel: "SOS",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="comment-alert-outline"
              size={28}
              color={focused ? "#631919" : "#a52a2a"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        headerShown={true}
        component={NotificationsTopTabNavigator}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bell"
              size={28}
              color={focused ? "#631919" : "#a52a2a"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    height: 60,
  },
  tabBarLabelStyle: {
    fontFamily: "Poppins-SemiBold",
    color: "#333",
    fontSize: 13,
  },
});
