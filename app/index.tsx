import React from "react";
import { Fit } from "rive-react-native";
import { RiveAnimation } from "@/components/RiveAnimation";

import Rating from "@/assets/animations/rating.riv";

export default function Playground() {
  return <RiveAnimation fit={Fit.FitWidth} source={Rating} autoplay={true} />;
}
