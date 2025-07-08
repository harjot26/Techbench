import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import useAppFonts from "@/utils/fonts";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./(main)/header";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// This will help us to prevents SplashScreen from Auto Hiding while the fonts are in loading state.
SplashScreen.preventAutoHideAsync();

export default function MainLayout() {
  const [loadedFonts, loadedError] = useAppFonts();

  useEffect(() => {
    if (loadedFonts || loadedError) {
      // Once the fonts loaded SplashScreen will immediately hides the Splashscreen with the help of hideAsync.
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, loadedError]);

  if (!loadedFonts && !loadedError) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <StatusBar style="light" /> */}

        <Stack.Screen name="(auth)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="(main)" />
        {/* <Stack.Screen name="(root)/(topBar)" /> */}
      </Stack>
    </GestureHandlerRootView>
  );
}
