import styled from "styled-components";

const HeaderOptions = styled.ul`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-right: 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 30px;
    box-sizing: border-box;
    padding: 5px;
    ion-icon {
      margin-left: 5px;
      color: #eee9e5;
      font-size: 12px;
    }
    P {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #eee9e5;
    }
    :hover {
      cursor: pointer;
      border-bottom: 1px;
      border-style: solid;
      border-color: #ffffff;
      margin-bottom: 10px;
      transition: 0.5s;
    }
    &:not(:hover) {
      transition: 0.5s;
    }
  }
`;

export default HeaderOptions;
