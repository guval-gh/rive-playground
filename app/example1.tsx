import React from "react";
import { useRef, useState } from "react";
import { Pressable, View } from "react-native";
import { Fit, RiveRef, RNRiveError, RNRiveErrorType } from "rive-react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { CustomButton } from "@/components/Button";

import truckV7 from "@/assets/animations/truck_v7.riv";
import { RiveAnimation } from "@/components/RiveAnimation";

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
      <RiveAnimation
        ref={riveRef}
        fit={Fit.FitWidth}
        source={truckV7}
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
        onError={(riveError: RNRiveError) => {
          switch (riveError.type) {
            case RNRiveErrorType.IncorrectRiveFileUrl: {
              console.log(`${riveError.message}`);
              return;
            }
            case RNRiveErrorType.MalformedFile: {
              console.log("Malformed File");
              return;
            }
            case RNRiveErrorType.FileNotFound: {
              console.log("File not found");
              return;
            }
            case RNRiveErrorType.IncorrectArtboardName: {
              console.log("IncorrectAnimationName");
              return;
            }
            case RNRiveErrorType.UnsupportedRuntimeVersion: {
              console.log("Runtime version unsupported");
              return;
            }
            case RNRiveErrorType.IncorrectStateMachineName: {
              console.log(`${riveError.message}`);
              return;
            }
            case RNRiveErrorType.IncorrectStateMachineInput: {
              console.log(`${riveError.message}`);
              return;
            }
            default:
              return;
          }
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
