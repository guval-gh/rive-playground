import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import Rive from "rive-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          <View style={{ right: 0 }}>
            <Rive
              url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
              artboardName="Avatar 1"
              stateMachineName="avatar"
              // artboardName="Avatar 2"
              // stateMachineName="avatar2"
              // artboardName="Avatar 3"
              // stateMachineName={"avatar3"}
              style={{ width: 40, height: 40 }}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Example 1" }} />
      <Tabs.Screen name="example2" options={{ title: "Example 2" }} />
    </Tabs>
  );
}
