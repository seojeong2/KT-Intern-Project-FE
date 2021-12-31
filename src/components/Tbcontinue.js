import React from "react";
import { HeadTitle, StyledButton } from "./Styled";
import { useNavigate } from "react-router-dom";

const Tbcontinue = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeadTitle style={{ marginTop: "100px" }}>
        열심히 개발중이에요...!
      </HeadTitle>
      <StyledButton
        color="green"
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로!
      </StyledButton>
    </div>
  );
};
export default Tbcontinue;
