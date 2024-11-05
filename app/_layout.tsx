import { Stack } from "expo-router";
import { Text, View } from "react-native";
import Rive from "rive-react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Rive Playground",
        headerRight: () => (
          <View style={{ right: 0 }}>
            <Rive
              url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
              artboardName="Avatar 1"
              stateMachineName="avatar"
              style={{ width: 40, height: 40 }}
            />
          </View>
        ),
      }}
    />
  );
}
