import * as React from "react";

import { StyleSheet, Text } from "react-native";
import Rive, { Fit } from "rive-react-native";

export default function Example5() {
  return (
    <>
      <Text>Avatar 1</Text>
      <Rive
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"Avatar 1"}
        animationName={"idlePreview"}
        resourceName={"avatars"}
      />

      <Text>Avatar 2</Text>
      <Rive
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"Avatar 2"}
        resourceName={"avatars"}
      />

      <Text>Avatar 3</Text>
      <Rive
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"Avatar 3"}
        resourceName={"avatars"}
      />

      <Text>All Avatars</Text>
      <Rive
        autoplay={true}
        style={styles.animation}
        fit={Fit.Contain}
        artboardName={"All Avatars"}
        resourceName={"avatars"}
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
