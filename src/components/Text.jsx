import React from "react";

import SplitText from "../ReactBits/SpliteText";
function Text(props) {
  return (
    <>
      <SplitText
        text={props.text}
        className="text-5xl text-white font-semibold text-center poppins-regular h-27 sm:h-20"
        delay={100}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={props.instruction}
      ></SplitText>
    </>
  );
}
export default Text;
