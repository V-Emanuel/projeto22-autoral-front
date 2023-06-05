import styled from "styled-components";

const Categories = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .text {
    width: 70%;
    height: 65px;
    font-weight: 400;
    font-size: 18px;
    font-family: "Roboto";
    font-style: normal;
    color: #eee9e5;
  }
  span,
  .text,
  div,
  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    width: 75%;
    justify-content: space-around;
    div {
      height: 230px;
      flex-direction: column;
      justify-content: flex-end;
      .externalCircle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 134px;
        height: 134px;
        position: relative;
        z-index: 1;
        background-color: #ffffff;
        clip-path: circle(50% at 50% 50%);
        .middleCircle {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 132px;
          height: 132px;
          background-color: #000000;
          clip-path: circle(50% at 50% 50%);
          .internalCircle {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
            display: flex;
            background-color: #fee8e8;
            width: 125px;
            height: 125px;
            clip-path: circle(50% at 50% 50%);
            border-style: double;
            border-color: #051937;
            filter: brightness(75%);
            img {
              width: 160px;
            }
            &:hover {
              filter: brightness(100%);
              transition: 0.5s;
              img {
                width: 170px;
                transition: 0.5s;
              }
            }
            &:not(:hover) {
              transition: 0.5s;
              img {
                transition: 0.8s;
              }
            }
          }
        }
      }
      p {
        height: 50px;
        font-weight: 400;
        font-size: 22px;
        font-family: "Mynerve";
        font-style: normal;
        line-height: 18px;
        color: #eee9e5;
      }
    }
  }
`;

export default Categories;
