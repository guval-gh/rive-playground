import React from "react";
import { useRef } from "react";
import { View } from "react-native";
import { Fit, RiveRef } from "rive-react-native";

import { CustomButton } from "@/components/Button";
import { RiveAnimation } from "@/components/RiveAnimation";

import uiSwipeLeftToDelete from "@/assets/animations/ui_swipe_left_to_delete.riv";

export default function Example2() {
  const riveRef = useRef<RiveRef>(null);

  const fireState = () => {
    riveRef.current?.fireState("Swipe to delete", "Trigger Delete");
  };

  return (
    <>
      <RiveAnimation
        ref={riveRef}
        fit={Fit.FitWidth}
        source={uiSwipeLeftToDelete}
        stateMachineName="Swipe to delete"
        autoplay={true}
        onStateChanged={(stateName, isStateMachine) => {
          console.log(
            "onStateChanged: ",
            stateName,
            "isStateMachine: ",
            isStateMachine
          );
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
          rowGap: 20,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <CustomButton onPress={fireState} text="fireState" />
        </View>
      </View>
    </>
  );
}
