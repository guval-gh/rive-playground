import { RiveAnimation } from "@/components/RiveAnimation";
import * as React from "react";
import { View } from "react-native";
import { Alignment, RiveRef } from "rive-react-native";

import NestedInputsAnimation from "@/assets/animations/runtime_nested_inputs.riv";
import { CustomButton } from "@/components/Button";

export default function Example6() {
  const riveRef = React.useRef<RiveRef>(null);
  const [hasOuterCircle, setHasOuterCircle] = React.useState(false);
  const [hasInnerCircle, setHasInnerCircle] = React.useState(false);

  return (
    <>
      <RiveAnimation
        ref={riveRef}
        alignment={Alignment.Center}
        autoplay={true}
        stateMachineName="MainStateMachine"
        source={NestedInputsAnimation}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 10,
          gap: 10,
        }}
      >
        <View style={{ gap: 10 }}>
          <CustomButton
            text="Outer Circle On"
            isSelected={hasOuterCircle}
            onPress={() => {
              setHasOuterCircle(true);
              riveRef.current?.setInputStateAtPath(
                "CircleOuterState",
                true,
                "CircleOuter"
              );
            }}
          />
          <CustomButton
            text="Outer Circle Off"
            isSelected={!hasOuterCircle}
            onPress={() => {
              setHasOuterCircle(false);
              riveRef.current?.setInputStateAtPath(
                "CircleOuterState",
                false,
                "CircleOuter"
              );
            }}
          />
        </View>
        <View style={{ gap: 10 }}>
          <CustomButton
            text="Inner Circle On"
            isSelected={hasInnerCircle}
            onPress={() => {
              setHasInnerCircle(true);
              riveRef.current?.setInputStateAtPath(
                "CircleInnerState",
                true,
                "CircleOuter/CircleInner"
              );
            }}
          />
          <CustomButton
            text="Inner Circle Off"
            isSelected={!hasInnerCircle}
            onPress={() => {
              setHasInnerCircle(false);
              riveRef.current?.setInputStateAtPath(
                "CircleInnerState",
                false,
                "CircleOuter/CircleInner"
              );
            }}
          />
        </View>
      </View>
    </>
  );
}
