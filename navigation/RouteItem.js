import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export const screens = {
  HomeTab: "HomeTab",
  HomeStack: "HomeStack",
  Home: "Home",
  ProfileStack: "ProfileStack",
  Profile: "Profile",
  SOSStack: "SOSStack",
  SOS: "SOS",
  NotificationsStack: "NotificationsStack",
  Notifications: "Notifications",
};

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: "Home",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: "Home",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="home" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },

  {
    name: screens.ProfileStack,
    focusedRoute: screens.ProfileStack,
    title: "Profile",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="bed" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },

  {
    name: screens.Profile,
    focusedRoute: screens.ProfileStack,
    title: "Profile",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="bed" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },

  {
    name: screens.SOSStack,
    focusedRoute: screens.SOSStack,
    title: "SOS",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="phone" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },
  {
    name: screens.SOS,
    focusedRoute: screens.SOSStack,
    title: "SOS",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="phone" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },

  {
    name: screens.NotificationsStack,
    focusedRoute: screens.NotificationsStack,
    title: "Notifications",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="star" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },
  {
    name: screens.Notifications,
    focusedRoute: screens.NotificationsStack,
    title: "Notifications",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="star" size={30} color={focused ? "#551E18" : "#b75555"} />
    ),
  },
];
