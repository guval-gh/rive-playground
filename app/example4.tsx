import { CustomButton } from "@/components/Button";
import * as React from "react";
import { View } from "react-native";
import { RiveRef } from "rive-react-native";

import { RiveAnimation } from "@/components/RiveAnimation";

export default function Example4() {
  const riveRef = React.useRef<RiveRef>(null);
  const [isHovered, setIsHovered] = React.useState(true);

  return (
    <>
      <RiveAnimation
        ref={riveRef}
        source={
          "https://public.uat.rive.app/community/runtime-files/148-325-tape.riv"
        }
        autoplay={true}
        stateMachineName={"State Machine 1"}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <CustomButton
          text="Toggle Mesh state machine"
          onPress={() => {
            setIsHovered(!isHovered);
            riveRef.current?.setInputState(
              "State Machine 1",
              "Hover",
              !isHovered
            );
          }}
        />
      </View>
    </>
  );
}
