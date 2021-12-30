import React from "react";
import { StyledButton } from "../components/Styled";
import { useNavigate } from "react-router-dom";

const Start = () => {
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
        선생님 게임에 참여하시겠습니까..?
      </h1>
      <div className="button-container" style={{ marginTop: "300px", alignItems:'center' }}>
        <StyledButton
          color="green"
          onClick={() => {
            navigate("/select");
          }}
        >
          시작하기
        </StyledButton>
        <StyledButton color="red">종료하기</StyledButton>
      </div>
    </div>
  );
};

export default Start;
