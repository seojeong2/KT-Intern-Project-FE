import React from "react";
import Manual from "../components/Manual";

const MugungwhaIntro = () => {
  return (
    <div>
      <Manual
        props={"/mugungwhagame"}
        text={
          "무궁화 꽃이 피었습니다~ 가 나오는 동안 move! 끝나면 동작에 맞춰 stop! 움직이면 죽음뿐.."
        }
      />
    </div>
  );
};
export default MugungwhaIntro;
