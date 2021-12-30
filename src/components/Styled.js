import styled from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  margin:100px;
  background-color: ${(props) => props.color};
  font-weight: bold;
  font-size: 50px;
  border-radius: 20px;
  color: white;
  font-family:koryeo;
`;
