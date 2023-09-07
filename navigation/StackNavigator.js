import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";

import LoginScreen from "../screens/StackScreens/LoginScreen";
import RegisterScreen from "../screens/StackScreens/RegisterScreen";
import ForgotScreen from "../screens/StackScreens/ForgotScreen";
import SplashScreen from "../screens/StackScreens/SplashScreen";

import Children659MScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/Children659MScreen";
import Children59YScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/Children59YScreen";
import Adolescent1019YScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/Adolescent1019YScreen";
import PregnantWomenScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/PregnantWomenScreen";
import LactatingWomenScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/LactatingWomenScreen";
import WomenReproductiveAgeScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/WomenReproductiveAgeScreen";
import MedicalTeamScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/MedicalTeamScreen";
import OthersScreen from "../screens/StackScreens/AddBeneficiaryFormScreens/OthersScreen";

import CustomHeaderBackButton from "../utils/CustomHeaderBackButton";
import AddBeneficiaryScreen from "../screens/TabScreens/AddBeneficiaryScreen";

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

const AddBeneficiaryStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Add Beneficiary">
      <Stack.Group>
        <Stack.Screen
          name="Add Beneficiary"
          component={AddBeneficiaryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Children 6-59 Months"
          component={Children659MScreen}
        />
        <Stack.Screen name="Children 5-9 Years" component={Children59YScreen} />
        <Stack.Screen
          name="Adolescent 10-19 Years"
          component={Adolescent1019YScreen}
        />
        <Stack.Screen name="Pregnant Women" component={PregnantWomenScreen} />
        <Stack.Screen name="Lactating Women" component={LactatingWomenScreen} />
        <Stack.Screen
          name="Women of Reproductive Age"
          component={WomenReproductiveAgeScreen}
        />
        <Stack.Screen name="Medical Team" component={MedicalTeamScreen} />
        <Stack.Screen name="Others" component={OthersScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { MainStackNavigator, AddBeneficiaryStackNavigator };
