import React from "react";
import Manual from "../components/Manual";

const DalgonaIntro = () => {
  return (
    <div>
      <Manual
        props={"/dalgonagame"}
        text={"자네 나와 달고나 게임 한판 하겠나?"}
      />
    </div>
  );
};
export default DalgonaIntro;
