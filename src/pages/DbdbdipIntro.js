import React from "react";
import Manual from "../components/Manual";

const DbdbdipIntro = () => {
  return (
    <div>
      <Manual
        props={"/dbdbdipgame"}
        text={
          "◯△☐ 디비디비딥 카드를 카메라에 인식! 컴퓨터와 같으면 실패, 다르면 성공! 최대 5번까지!"
        }
      />
    </div>
  );
};
export default DbdbdipIntro;