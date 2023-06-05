import styled from "styled-components";
import eolic from "../../assets/imgBackgrounds/eolic.jpg";

const MiddleContent = styled.section`
  width: 100%;
  height: 550px;
  scroll-snap-align: start;
  background-image: url(${eolic});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(55%);
`;

export default MiddleContent;
