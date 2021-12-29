import React from "react";
import managerImage from "../img/tri_right.png";
import { useNavigate } from "react-router-dom";

const Manual = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", backgroundColor: "white", height: "100vh" }}>
      <div
        className="LeftContainer"
        style={{
          backgroundColor: "white",
          width: "40%",
          //height: "100vh",
          margin: "50px",
        }}
      >
        <img
          src={managerImage}
          alt="오징어게임 관리자"
          position={"absolute"}
          height={"100%"}
        ></img>
      </div>
      <div
        className="RightContainer"
        style={{
          width: "60%",
          //height: "100vh",
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          //backgroundColor: "blue",
        }}
      >
        <div style={{ fontSize: "60px" }}>게임 설명</div>

        <button
          style={{ width: "100px", height: "50px", marginTop: "500px" }}
          onClick={() => {
            navigate(props);
          }}
        >
          게임하러 가기
        </button>
      </div>
    </div>
  );
};

export default Manual;
