import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import yeongheefront from "../img/yeongheefront2.png";

const MugungwhaGame = () => {
  return (
    <div
      className="MainContatiner"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div
        className="container1"
        style={{
          flex: "1",
          backgroundColor: "white",

          marginBottom: "100px",
          height: "100vh",
        }}
      >
        <h1>웹캠 영역</h1>
      </div>
      <div
        className="container1"
        style={{
          flex: "1",
          marginBottom: "100px",
          backgroundColor: "green",
        }}
      >
        <VideoPlayer />
      </div>
      <div
        className="container1"
        style={{ flex: "1", backgroundColor: "white" }}
      >
        <img src={yeongheefront} alt="관리자" width="100%"></img>
      </div>
    </div>
  );
};

export default MugungwhaGame;
