import { ContactsOutlined } from "@material-ui/icons";
import React from "react";
import { StyledButton } from "../components/Styled";

import { useNavigate } from "react-router-dom";

const Retry = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          color: "white",
          fontFamily: "koryeo",
          fontSize: "150px",
          marginTop: "100px",
        }}
      >
        게임을 다시 시작하겠습니까?
      </h1>
      <div className="button-container" style={{ marginTop: "300px" }}>
        {/*}
        <button
          style={{
            borderRadius: "20px",
            backgroundColor: "red",
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "koryeo",
            marginRight: "100px",
          }}
          onClick={() => {
            navigate(-2);
          }}
        >
          다시
        </button>
        */}
        <StyledButton color='green' onClick={() => {
            navigate(-2);
          }} >다시</StyledButton>
        {/*
        <button
          style={{
            borderRadius: "20px",
            backgroundColor: "green",
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "koryeo",
            marginRight: "100px",
          }}
          onClick={() => {
            navigate("/select");
          }}
        >
          끝
        </button>
        */}
        <StyledButton color='red' onClick={() => {
            navigate("/select");
          }}>끝</StyledButton>
      </div>
    </div>
  );
};
export default Retry;
