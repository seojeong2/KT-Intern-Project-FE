import React, { useState } from "react";
import { HeadTitle, StyledButton } from "../components/Styled";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const sendInfo = async () => {
    await axios({
      method: "post",
      url: "http://172.30.1.42:8080/api/members",
      data: { username: username, password: password },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <HeadTitle>아이디 등록!</HeadTitle>
      <div
        style={{display:'flex',
                flexDirection:'row',
                alignItems: "center",
                justifyContent: "center",}}
      >
      <div
        className="form"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:'column'
        }}
      >
        <input
          placeholder="닉네임"
          name="username"
          value={username}
          onChange={onChange}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "30px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom:'10px'
          }}
        />
        <input
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "30px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        />
      </div>
      <StyledButton
          color="green"
          style={{marginRight:'0px'}}
          onClick={() => {
            dispatch({ type: "SAVE_USERNAME", username });
            sendInfo();
            navigate("/select");
          }}
        >
          등록!
        </StyledButton>
        </div>
    </div>
  );
};
export default Register;
