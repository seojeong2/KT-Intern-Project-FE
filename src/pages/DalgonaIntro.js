import React from "react";
import Manual from "../components/Manual";

const DalgonaIntro = () => {
  return (
    <div>
      <Manual
        props={"/dalgonagame"}
        text={
          "두 손가락으로 시작점을 잡고, 한 손가락으로 달고나를 깨보자! 벗어나면 죽음뿐"
        }
      />
    </div>
  );
};
export default DalgonaIntro;
