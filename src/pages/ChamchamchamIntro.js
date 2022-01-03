import React from "react";
import Manual from "../components/Manual";

const ChamchamchamIntro = () => {
  return (
    <div>
      <Manual
        props={"/chamchamchamgame"}
        text={
          "소리가 나오는 동안 왼쪽과 오른쪽을 선택하여 고개를 돌리자!"
        }
      />
    </div>
  );
};
export default ChamchamchamIntro;