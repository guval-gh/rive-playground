import React from "react";
import { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Rive, { Fit, RiveRef } from "rive-react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { CustomButton } from "../../components/Button";

export default function Example1() {
  const riveRef = useRef<RiveRef>(null);

  const [animation, setAnimation] = useState<
    "bouncing" | "idle" | "windshield_wipers" | "broken"
  >("idle");

  const handlePlay = () => {
    riveRef.current?.play();
  };

  const handlePause = () => {
    riveRef.current?.pause();
  };

  const handleStop = () => {
    riveRef.current?.stop();
  };

  const handleReset = () => {
    riveRef.current?.reset();
  };

  return (
    <>
      <Rive
        ref={riveRef}
        fit={Fit.FitWidth}
        resourceName="truck_v7"
        animationName={animation}
        autoplay={false}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
          rowGap: 20,
        }}
      >
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable onPress={handlePlay}>
            <FontAwesome5 name="play" size={25} />
          </Pressable>
          <Pressable onPress={handlePause}>
            <FontAwesome5 name="pause" size={25} />
          </Pressable>
          <Pressable onPress={handleStop}>
            <FontAwesome5 name="stop" size={25} />
          </Pressable>
          <Pressable onPress={handleReset}>
            <FontAwesome5 name="undo" size={25} />
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <CustomButton
            onPress={() => setAnimation("idle")}
            isSelected={animation === "idle"}
          >
            <Text>Idle</Text>
          </CustomButton>
          <CustomButton
            onPress={() => setAnimation("bouncing")}
            isSelected={animation === "bouncing"}
          >
            <Text>Bouncing</Text>
          </CustomButton>
          <CustomButton
            onPress={() => setAnimation("windshield_wipers")}
            isSelected={animation === "windshield_wipers"}
          >
            <Text>Windshield wipers</Text>
          </CustomButton>
          <CustomButton
            onPress={() => setAnimation("broken")}
            isSelected={animation === "broken"}
          >
            <Text>Broken</Text>
          </CustomButton>
        </View>
      </View>
    </>
  );
}
