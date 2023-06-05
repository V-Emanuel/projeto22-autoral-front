import styled from "styled-components";

const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 550px;
      height: 38px;
      background: #ffffff;
      box-sizing: border-box;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: #000000;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: none;
      padding-left: 20px;
      &:placeholder-shown {
        line-height: 25px;
        padding-left: 20px;
        color: #dbdbdb;
      }
    }
    button {
      width: 55px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #33384e;
      border: none;
      ion-icon {
        color: #ffffff;
        font-size: 25px;
        --ionicon-stroke-width: 50px;
      }
      &:hover {
        cursor: pointer;
        background-color: #ddcaa2;
        transition: 0.5s;
        ion-icon {
          --ionicon-stroke-width: 70px;
          color: #33384e;
          transition: 0.5s;
        }
      }
      &:not(:hover) {
        transition: 0.5s;
        ion-icon {
          transition: 0.5s;
        }
      }
    }
  }
`;

export default Search;
