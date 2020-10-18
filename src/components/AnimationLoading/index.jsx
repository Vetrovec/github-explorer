import React from "react";
import { BouncingCircle, CircleWrapper, Bar } from "./elements";

function LoadingAnimation() {
  return (
    <Bar>
      <CircleWrapper>
        <BouncingCircle delay="-0.66s" />
      </CircleWrapper>
      <CircleWrapper>
        <BouncingCircle delay="-0.33s" />
      </CircleWrapper>
      <CircleWrapper>
        <BouncingCircle />
      </CircleWrapper>
    </Bar>
  );
}

export default LoadingAnimation;
