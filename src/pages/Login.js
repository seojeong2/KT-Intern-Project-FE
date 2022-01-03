import { Style } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/Styled";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>카메라 인식 영역</div>
      <StyledButton
        color="green"
        style={{ width: "200px", height: "150px" }}
        onClick={() => {
          navigate("/register");
        }}
      >
        캐릭터 만들러 가기!
      </StyledButton>
    </div>
  );
};
export default Login;
