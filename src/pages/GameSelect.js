import React from "react";
import managerImage from "../img/tri_right.png";
import { StyledButton } from "../components/Styled";
import { useNavigate } from "react-router-dom";
const GameSelect = () => {
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
        }}
      >
        <div
          className="button-container"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "60%",
              height: "70px",
              borderRadius: "10px",
              marginTop: "70px",
              marginBottom: "50px",
              marginLeft: "50px",
              marginRight: "50px",
              fontSize: "30px",
              backgroundColor: "white",
              borderWidth: "4px",
              borderColor: "green",
            }}
            onClick={() => {
              navigate("/mugungwhaintro");
            }}
          >
            무궁화 꽃이 피었습니다
          </button>
          <button
            style={{
              width: "60%",
              height: "70px",
              borderRadius: "10px",
              margin: "50px",
              fontSize: "30px",
              backgroundColor: "white",
              borderColor: "#FF1493",
              borderWidth: "4px",
            }}
            onClick={() => {
              navigate("/dalgonaintro");
            }}
          >
            달고나 게임
          </button>
          <button
            style={{
              width: "60%",
              height: "70px",
              borderRadius: "10px",
              margin: "50px",
              fontSize: "30px",
              backgroundColor: "white",
              borderColor: "green",
              borderWidth: "4px",
            }}
            onClick={() => {
              navigate("/rspintro");
            }}
          >
            가위바위보
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameSelect;
