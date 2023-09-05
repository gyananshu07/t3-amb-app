import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import Notification from "../../components/Notifications/Notification";

const AllNotificationsScreen = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Notification />
    </ScrollView>
  );
};

export default AllNotificationsScreen;

const styles = StyleSheet.create({});
