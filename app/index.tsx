import React, { useRef } from "react";
import Rive, { Fit, RiveRef } from "rive-react-native";

export default function Playground() {
  const riveRef = useRef<RiveRef>(null);

  return (
    <Rive
      ref={riveRef}
      autoplay={true}
      fit={Fit.Cover}
      stateMachineName="skill-controller"
      resourceName="skills_listener"
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
