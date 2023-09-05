import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  drawerItem: {
    width: "100%",
    fontFamily: "Poppins-Medium",
  },
  scrollViewContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  iconRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    paddingHorizontal: 20,
    height: "auto",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
  },
  text: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  row: { flexDirection: "row", alignItems: "center" },
  boldText: { fontSize: 16, fontFamily: "Poppins-Bold" },
  textCenter: { textAlign: "center" },
  separator: {
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    width: 300,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  outlinedButton: {
    borderColor: "#a52a2a",
    backgroundColor: "#fff",
    borderRadius: 5,
    fontFamily: "Poppins-SemiBold",
    width: "100%",
  },
  outlineButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#a52a2a",
  },
  button: {
    backgroundColor: "#a52a2a",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  splashImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  themeColor: {
    color: "#a52a2a",
  },
  backgroundThemeColor: {
    backgroundColor: "#a52a2a",
  },

  formContainer: { width: "100%", paddingHorizontal: 20, gap: 20 },
  registrationContainer: { width: "100%", paddingHorizontal: 20 },
  registerForm: { width: "100%", gap: 15, paddingBottom: 20 },
  input: {
    width: "100%",
    borderColor: "#a52a2a",
    backgroundColor: "white",
    fontFamily: "Poppins-SemiBold",
  },
  calendarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15,
    marginTop: 5,
    gap: 15,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#a52a2a",
    backgroundColor: "white",
    fontFamily: "Poppins-SemiBold",
    height: 50,
    maxHeight: 50,
  },
  FormHeaderText: {
    alignSelf: "flex-start",
    paddingBottom: 10,
    color: "#333",
    width: "100%",
    fontFamily: "Poppins-Bold",
  },

  formLabel: {
    color: "#a52a2a",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  fontRegular: { fontFamily: "Poppins-Regular" },
  fontMedium: { fontFamily: "Poppins-Medium" },
  fontSemiBold: { fontFamily: "Poppins-SemiBold" },
  fontBold: { fontFamily: "Poppins-Bold" },
});

export default styles;
