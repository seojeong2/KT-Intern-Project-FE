import React, { useEffect } from "react";
import { HeadTitle } from "../components/Styled";
import axios from "axios";
const Result = () => {
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    await axios({
      method: "get",
      url: "",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((response) => {
      console.log("response");
    });
  };
  return (
    <div>
      <HeadTitle>랭킹 보기~</HeadTitle>
    </div>
  );
};
export default Result;
