import React from "react";
import { HeadTitle, StyledButton } from "../components/Styled";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeadTitle>선생님 게임에 참여하시겠습니까..?</HeadTitle>

      <div
        className="button-container"
        style={{ marginTop: "300px", alignItems: "center" }}
      >
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
