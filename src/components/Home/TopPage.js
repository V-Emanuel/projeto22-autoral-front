import styled from "styled-components";
import geometric from "../../assets/imgBackgrounds/geometric.jpg";

const TopPage = styled.section`
  width: 100%;
  height: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${geometric});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 70px;
    font-weight: 400;
    font-size: 20px;
    font-family: "Mynerve";
    font-style: normal;
    color: #006686;
    &:hover {
      font-size: 22px;
      color: #eee9e5;
      transition: 0.5s;
    }
    &:not(:hover) {
      transition: 0.7s;
    }
  }
`;

export default TopPage;
