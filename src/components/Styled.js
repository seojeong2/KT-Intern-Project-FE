import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin-right: 100px;
  background-color: ${(props) => props.color};
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  color: white;
`;
