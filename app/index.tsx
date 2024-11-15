import React from "react";
import { Fit } from "rive-react-native";
import { RiveAnimation } from "@/components/RiveAnimation";

import Rating from "@/assets/animations/rating.riv";

export default function Playground() {
  return (
    <RiveAnimation
      fit={Fit.FitWidth}
      source={Rating}
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
      onRiveEventReceived={(event) => {
        console.log("onRiveEventReceived: ", event);
      }}
    />
  );
}
