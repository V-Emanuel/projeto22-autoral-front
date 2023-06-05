import styled from "styled-components";

const Description = styled.span`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-bottom: 15px;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  color: #eee9e5;
  h1,
  h2 {
    width: 70%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  h1 {
    font-weight: 700;
    font-size: 18px;
  }
  h2 {
    font-weight: 400;
    font-size: 15px;
  }
`;

export default Description;
