import { StyleSheet } from "react-native";

import TodaysNotificationsScreen from "../screens/TopTabs/TodaysNotificationsScreen";
import AllNotificationsScreen from "../screens/TopTabs/AllNotificationsScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

function NotificationsTopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: {
          backgroundColor: "#a52a2a",
        },
      }}
    >
      <Tab.Screen
        name="Today's Notifications"
        component={TodaysNotificationsScreen}
      />
      <Tab.Screen name="All Notifications" component={AllNotificationsScreen} />
    </Tab.Navigator>
  );
}
export default NotificationsTopTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: { marginTop: 2 },
  tabBarLabelStyle: {
    fontFamily: "Poppins-SemiBold",
    color: "#333",
    fontSize: 13,
  },
});
