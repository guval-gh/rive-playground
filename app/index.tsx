import React from "react";
import { useRef } from "react";
import { Fit, RiveRef } from "rive-react-native";
import { RiveAnimation } from "@/components/RiveAnimation";

import Rating from "@/assets/animations/rating.riv";

export default function Playground() {
  const riveRef = useRef<RiveRef>(null);

  return (
    <RiveAnimation
      ref={riveRef}
      fit={Fit.FitWidth}
      source={
        "https://public.uat.rive.app/community/runtime-files/148-325-tape.riv"
      }
      autoplay={true}
    />
  );
}
