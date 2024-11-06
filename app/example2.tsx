import React from "react";
import { useRef } from "react";
import { View } from "react-native";
import Rive, { Fit, RiveRef } from "rive-react-native";

import { CustomButton } from "@/components/Button";

export default function Example2() {
  const riveRef = useRef<RiveRef>(null);

  const fireState = () => {
    riveRef.current?.fireState("Swipe to delete", "Trigger Delete");
  };

  return (
    <>
      <Rive
        ref={riveRef}
        fit={Fit.FitWidth}
        resourceName="ui_swipe_left_to_delete"
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
