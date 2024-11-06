import React, { useState } from "react";
import { useRef } from "react";
import { Text, View } from "react-native";
import Rive, { Fit, RiveRef } from "rive-react-native";
import Slider from "@react-native-community/slider";

export default function Example3() {
  const riveRef = useRef<RiveRef>(null);
  const [selectedLevel, setSelectedLevel] = useState(0);

  const setLevel = (n: number) => {
    setSelectedLevel(n);
    riveRef.current?.setInputState("skill-controller", "level", n);
  };

  return (
    <>
      <Rive
        ref={riveRef}
        autoplay={true}
        fit={Fit.Cover}
        stateMachineName="skill-controller"
        onStateChanged={(stateMachineName, stateName) => {
          console.log(
            "onStateChanged: ",
            "stateMachineName: ",
            stateMachineName,
            "stateName: ",
            stateName
          );

          const level = stateName.includes("Beginner")
            ? 0
            : stateName.includes("Intermediate")
            ? 1
            : 2;

          setSelectedLevel(level);
        }}
        resourceName={"skills_listener"}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
          rowGap: 20,
        }}
      >
        <Text>Selected Level: {selectedLevel}</Text>

        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={2}
            value={selectedLevel}
            step={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setLevel(value)}
          />
        </View>
      </View>
    </>
  );
}
