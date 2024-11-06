import * as React from "react";

import { StyleSheet, Text } from "react-native";
import { Fit } from "rive-react-native";

import { RiveAnimation } from "@/components/RiveAnimation";

import avatars from "@/assets/animations/avatars.riv";

export default function Example5() {
  return (
    <>
      <Text>Avatar 1</Text>
      <RiveAnimation
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"Avatar 1"}
        animationName={"idlePreview"}
        source={avatars}
      />

      <Text>Avatar 2</Text>
      <RiveAnimation
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"Avatar 2"}
        source={avatars}
      />

      <Text>Avatar 3</Text>
      <RiveAnimation
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"Avatar 3"}
        source={avatars}
      />

      <Text>All Avatars</Text>
      <RiveAnimation
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"All Avatars"}
        source={avatars}
      />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  animation: {
    width: "100%",
    height: 100,
  },
});
