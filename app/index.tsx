import React from "react";
import { useRef } from "react";
import { Pressable, View } from "react-native";
import Rive, { Fit, RiveRef } from "rive-react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { CustomButton } from "@/components/Button";

export default function Playground() {
  const riveRef = useRef<RiveRef>(null);

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
      <View style={{ flex: 1 }} />
      {/* <Rive
        ref={riveRef}
        fit={Fit.FitWidth}
        // resourceName={""}
        // url={""}
        animationName={animation}
        autoplay={true}
      /> */}
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
          <CustomButton onPress={() => null} text="???" />
        </View>
      </View>
    </>
  );
}
