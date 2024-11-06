import { CustomButton } from "@/components/Button";
import { useFonts } from "expo-font";
import { router, Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import {
  RiveRenderer,
  RiveRendererAndroid,
  RiveRendererIOS,
} from "rive-react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const currentRoute = usePathname();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    RiveRenderer.defaultRenderer(
      RiveRendererIOS.Rive,
      RiveRendererAndroid.Skia
    );
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }} />;
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10, gap: 5 }}
        >
          <CustomButton
            text="Playground"
            onPress={() => router.replace("/")}
            isSelected={currentRoute === "/"}
          />
          <CustomButton
            text="Controls"
            onPress={() => router.replace("/example1")}
            isSelected={currentRoute === "/example1"}
          />
          <CustomButton
            text="fireState"
            onPress={() => router.replace("/example2")}
            isSelected={currentRoute === "/example2"}
          />
          <CustomButton
            text="setInputState"
            onPress={() => router.replace("/example3")}
            isSelected={currentRoute === "/example3"}
          />
          <CustomButton
            text="Mesh state machine"
            onPress={() => router.replace("/example4")}
            isSelected={currentRoute === "/example4"}
          />
          <CustomButton
            text="Avatars"
            onPress={() => router.replace("/example5")}
            isSelected={currentRoute === "/example5"}
          />
          <CustomButton
            text="Crash on iOS"
            onPress={() => router.replace("/example6")}
            isSelected={currentRoute === "/example6"}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
