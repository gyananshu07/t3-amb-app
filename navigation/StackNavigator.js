import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";

import LoginScreen from "../screens/StackScreens/LoginScreen";
import RegisterScreen from "../screens/StackScreens/RegisterScreen";
import ForgotScreen from "../screens/StackScreens/ForgotScreen";
import SplashScreen from "../screens/StackScreens/SplashScreen";

import CustomHeaderBackButton from "../utils/CustomHeaderBackButton";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#ae3f3f",
    fontFamily: "Poppins-SemiBold",
  },
  headerTitleStyle: {
    fontFamily: "Poppins-SemiBold",
  },
  headerTitleAlign: "center",
  headerTintColor: "white",
  headerLeft: () => <CustomHeaderBackButton />,
};

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashHome" headerMode="none">
      <Stack.Group>
        <Stack.Screen
          name="SplashHome"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Group screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>

      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
