import React from "react";
import squidManager from "../img/tri_right.png";

const DalgonaGame = () => {
  return (
    <div
      className="MainContatiner"
      style={{ width: "100%", height: "100%", display: "flex" }}
    >
      <div
        className="container1"
        style={{
          flex: "1",

          height: "100vh",
        }}
      >
        <img src={squidManager} alt="관리자" width="100%"></img>
      </div>
      <div
        className="container1"
        style={{
          flex: "1",
          marginTop: "100px",
          marginBottom: "100px",
          backgroundColor: "white",
        }}
      >
        <h1>웹캠 영역</h1>
      </div>
      <div className="container1" style={{ flex: "1" }}>
        <img src={squidManager} alt="관리자" width="100%"></img>
      </div>
    </div>
  );
};

export default DalgonaGame;
