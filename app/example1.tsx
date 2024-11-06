import React from "react";
import { useRef, useState } from "react";
import { Pressable, View } from "react-native";
import Rive, { Fit, RiveRef } from "rive-react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { CustomButton } from "../components/Button";

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
        autoplay={true}
        onPlay={(animationName, isStateMachine) => {
          console.log(
            "onPlay: ",
            animationName,
            "isStateMachine: ",
            isStateMachine
          );
        }}
        onPause={(animationName, isStateMachine) => {
          console.log(
            "onPause:",
            animationName,
            "isStateMachine: ",
            isStateMachine
          );
        }}
        onStop={(animationName, isStateMachine) => {
          console.log(
            "onStop: ",
            animationName,
            "isStateMachine: ",
            isStateMachine
          );
        }}
        onLoopEnd={(animationName, loopMode) => {
          console.log("onLoopEnd: ", animationName, "loopMode: ", loopMode);
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
            text="Idle"
            onPress={() => setAnimation("idle")}
            isSelected={animation === "idle"}
          />

          <CustomButton
            text="Bouncing"
            onPress={() => setAnimation("bouncing")}
            isSelected={animation === "bouncing"}
          />
          <CustomButton
            text="Windshield wipers"
            onPress={() => setAnimation("windshield_wipers")}
            isSelected={animation === "windshield_wipers"}
          />
          <CustomButton
            text="Broken"
            onPress={() => setAnimation("broken")}
            isSelected={animation === "broken"}
          />
        </View>
      </View>
    </>
  );
}
