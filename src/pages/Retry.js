import { ContactsOutlined } from "@material-ui/icons";
import React from "react";
import { HeadTitle, StyledButton } from "../components/Styled";

import { useNavigate } from "react-router-dom";

const Retry = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <HeadTitle>게임을 다시 시작하겠습니까?</HeadTitle>

      <div className="button-container" style={{ marginTop: "300px" }}>
        <StyledButton
          color="green"
          onClick={() => {
            navigate(-2);
          }}
        >
          다시
        </StyledButton>

        <StyledButton
          color="red"
          onClick={() => {
            navigate("/select");
          }}
        >
          끝
        </StyledButton>
      </div>
    </div>
  );
};
export default Retry;
