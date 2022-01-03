import React from "react";
import { HeadTitle, StyledButton } from "../components/Styled";
import { useNavigate } from "react-router-dom";
import Share from "../img/share3.png";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeadTitle style={{ marginTop: "50px" }}>
        선생님 게임에 참여하시겠습니까..?
      </HeadTitle>
      <img src={Share} height={"400px"}></img>

      <div className="button-container" style={{ alignItems: "center" }}>
        <StyledButton
          color="green"
          onClick={() => {
            navigate("/select");
          }}
        >
          시작하기
        </StyledButton>
        <StyledButton
          color="red"
          onClick={() => {
            navigate("/");
          }}
        >
          종료하기
        </StyledButton>
      </div>
    </div>
  );
};

export default Start;
