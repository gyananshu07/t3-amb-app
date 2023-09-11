import { NavigationContainer, useRoute } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import React, { useCallback, useContext, useEffect } from "react";
import { MainStackNavigator } from "./navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaProvider onLayout={handleOnLayout}>
        <NavigationContainer>
          <AuthProvider>
            <Stack.Navigator initialRouteName="MainStack">
              <Stack.Screen
                name="SplashStack"
                component={MainStackNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
