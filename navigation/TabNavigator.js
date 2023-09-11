import React from "react";
import { StyleSheet } from "react-native";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/TabScreens/HomeScreen";
import ProfileScreen from "../screens/TabScreens/ProfileScreen";
import { AddBeneficiaryStackNavigator } from "./StackNavigator";
import SOSScreen from "../screens/TabScreens/SOSScreen";
import NotificationsTopTabNavigator from "./TopTabNavigator";
import RegisterComplaintScreen from "../screens/DrawerScreens/RegisterComplaintScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BeneficiarySearchScreen from "../screens/DrawerScreens/BeneficiarySearchScreen";
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelPosition: "below-icon",
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

const BeneficiarySearchTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="BeneficiarySearch"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="BeneficiarySearch"
        component={BeneficiarySearchScreen}
        options={{
          tabBarLabel: "Beneficiary Search",
          tabBarItemStyle: { display: "none" },
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

const ProfileTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelPosition: "below-icon",
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

const SOSTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="SOS"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelPosition: "below-icon",
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

const RegisterComplaintTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="RegisterComplaint"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="RegisterComplaint"
        component={RegisterComplaintScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
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

export {
  HomeTabNavigator,
  BeneficiarySearchTabNavigator,
  ProfileTabNavigator,
  SOSTabNavigator,
  RegisterComplaintTabNavigator,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "nowrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    height: 60,
    flexWrap: "nowrap",
  },
  tabBarLabelStyle: {
    fontFamily: "Poppins-SemiBold",
    flexWrap: "nowrap",
    color: "#333",
    fontSize: 13,
  },
});
